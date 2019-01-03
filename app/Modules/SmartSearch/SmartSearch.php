<?php

namespace App\Modules\SmartSearch;

use App\Models\Nominals\ParadigmType;
use App\Models\Verbs\Mode;
use App\Models\Verbs\Order;
use App\Models\Verbs\VerbClass;
use App\Models\Words\Feature;
use App\Models\Group;
use App\Models\Language;

class SmartSearch
{
    protected $lookup;
    protected $matches = [];
    protected $hasFeatures = false;

    public $languages = [];
    public $modes = [];
    public $classes = [];
    public $orders = [];
    public $groups = [];
    public $paradigmTypes = [];
    public $subject = '';
    public $primaryObject = '';
    public $secondaryObject = '';

    public $negative = false;
    public $affirmative = false;
    public $diminutive = false;
    public $nonDiminutive = false;

    public function __construct(string $lookup)
    {
        $this->lookup = ' ' . $lookup . ' ';
    }

    public function parse()
    {
        $this->extractLanguages();
        $this->extract('modes', Mode::class);
        $this->extract('classes', VerbClass::class);
        $this->extract('orders', Order::class);
        $this->extract('paradigmTypes', ParadigmType::class);

        $this->extractBoolean('negative', 'affirmative');
        $this->extractBoolean('diminutive', 'non-diminutive');

        $this->extractFeatures();
    }

    /**
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function route()
    {
        $router = new UnknownRouter($this->lookup);

        if (count($this->classes) > 0) {
            if (!$this->hasFeatures) {
                $router = new VerbParadigmRouter($this);
            } elseif (count($this->orders) <= 1 && count($this->modes) <= 1) {
                $router = new VerbFormRouter($this);
            }
        } elseif (count($this->matches) == 1 && count($this->{$this->matches[0]}) == 1 && ($this->matches[0] == 'groups' || $this->matches[0] == 'languages')) {
            $router = new SingleRouter($this->matches[0], $this->{$this->matches[0]}[0]);
        }

        flash($router->getMessage(), 'is-success');

        return $router->route();
    }

    protected function extract(string $category, string $model, $alternates = [])
    {
        if (is_string($alternates)) {
            $alternates = [$alternates];
        }

        $collection = $this->query($model, $alternates);
        $dictionary = Dictionary::build($collection, $alternates);
        $pattern = ModelPattern::generate($collection, $alternates);
        $output = [];

        preg_match_all($pattern, $this->lookup, $matches);

        if (count($matches[0]) > 0) {
            foreach ($matches[0] as $match) {
                $output = array_merge($output, $dictionary->lookup($match));
            }

            $this->$category = $output;
            $this->matches[] = $category;
        }
    }

    protected function extractBoolean(string $positive, string $negative)
    {
        $template = '`(?<=[ ])(?<![not |aren\'t|isn\'t])(%s|not %s)(?=[, ])`';

        $this->{camel_case($positive)} = preg_match(sprintf($template, $positive, $negative), $this->lookup) > 0;
        $this->{camel_case($negative)} = preg_match(sprintf($template, $negative, $positive), $this->lookup) > 0;
    }

    protected function extractLanguages()
    {
        $groups = Group::select('name', 'aliases', 'id')->get();
        $languages = Language::select('name', 'alternate_names', 'algo_code', 'id')->get();

        foreach ($groups as $group) {
            $group->category = 'groups';
        }
        foreach ($languages as $language) {
            $language->category = 'languages';
        }

        $collection = $languages->concat($groups);
        $dictionary = Dictionary::build($collection, ['aliases', 'algo_code']);
        $pattern = ModelPattern::generate($collection, ['aliases', 'algo_code']);
        $output = ['languages' => [], 'groups' => []];

        preg_match_all($pattern, $this->lookup, $matches);

        if (count($matches[0]) > 0) {
            foreach ($matches[0] as $match) {
                $output['languages'] = array_merge($output['languages'], $dictionary->lookup($match, 'languages'));
                $output['groups'] = array_merge($output['groups'], $dictionary->lookup($match, 'groups'));
            }

            foreach ($output as $key => $value) {
                $this->$key = $value;

                if (count($value) > 0) {
                    $this->matches[] = $key;
                }
            }
        }
    }

    protected function extractFeatures()
    {
        $matcher = Feature::pattern();
        $matches = $matcher->match($this->lookup);
        $numMatches = count($matches);
        $args = [];

        if ($numMatches > 0) {
            $range = roundUpTo($numMatches, 6);

            for ($i = 0; $i < $range; $i += 6) {
                $sign      = $this->extractSign($matches, $i);
                $person    = $this->extractPerson($matches, $i);
                $number    = $this->extractNumber($matches, $i);
                $obviative = $this->extractObviative($matches, $i);

                $args[] =[
                    'sign'   => $sign,
                    'person' => $person,
                    'number' => $number,
                    'obviativeCode' => $obviative
                ];
            }

            $this->saveFeatures($args);
        }
    }

    protected function extractSign(array $matches, int $i)
    {
        $sign = $matches[$i];

        if ($sign == '+' || $sign == '-') {
            return $sign;
        }

        return null;
    }

    protected function extractPerson(array $matches, int $i)
    {
        $person = null;
        $dictionary = collect([
            '1' => ['1', '1st', 'first'],
            '2' => ['2', '2nd', 'second'],
            '3' => ['3', '3rd', 'third', '3\'', '3\'\''],
            '0' => ['0', '0\'', '0\'\''],
            '21' => ['21']
        ]);

        if (isset($matches[$i + 3]) && $matches[$i + 3] == 'inclusive') {
            $person = '21';
        } elseif (isset($matches[$i + 4]) && $matches[$i + 4] == 'inanimate') {
            $person = '0';
        } else {
            $person = $dictionary->search(function ($values) use ($matches, $i) {
                return array_search($matches[$i + 1], $values) !== false;
            });
        }

        $person = $person === false ? null : $person;

        return $person;
    }

    public function extractNumber(array $matches, int $i)
    {
        $number = null;
        $dictionary = collect([
            '1' => ['s', 'sg', 'singular'],
            '2' => ['d', 'du', 'dual'],
            '3' => ['p', 'pl', 'plural']
        ]);

        if (isset($matches[$i + 1]) && $matches[$i + 1] == '21') {
            $number = 3;
        } elseif (isset($mathes[$i + 3]) && $matches[$i + 3] == 'inclusive') {
            $number =3;
        } elseif (isset($matches[$i + 2])) {
            $number = $dictionary->search(function ($values) use ($matches, $i) {
                return array_search($matches[$i + 2], $values) !== false;
            });
        }

        $number = $number === false ? null : $number;

        return $number;
    }

    protected function extractObviative(array $matches, int $i)
    {
        $obviative = null;

        if (strpos($matches[$i + 1], '\'\'') !== false) {
            $obviative = 2;
        } elseif (strpos($matches[$i + 1], '\'') !== false) {
            $obviative = 1;
        }

        if (isset($matches[$i + 5]) && strlen($matches[$i + 5]) > 0) {
            if ($matches[$i + 5] == 'obviative') {
                $obviative = 1;
            } else {
                $obviative = 2;
            }
        }

        return $obviative;
    }

    protected function saveFeatures(array $features)
    {
        switch (count($features)) {
            case 3:
                $this->secondaryObject = Feature::where(array_except($features[2], 'sign'))->first()->id;
                // no break
            case 2:
                $feature = Feature::where(array_except($features[1], 'sign'))->first()->id;

                if ($features[1]['sign'] == '-') {
                    $this->primaryObject = $feature;
                } else {
                    $this->secondaryObject = $feature;
                }
                // no break
            case 1:
                $this->hasFeatures = true;
                $this->subject = Feature::where(array_except($features[0], 'sign'))->first()->id;
                break;
            default:
                break;
        }
    }

    protected function query(string $class, $extraFields = [])
    {
        $fields = ['name', 'id'];

        if (is_string($extraFields)) {
            $fields[] = $extraFields;
        } elseif (is_array($extraFields)) {
            $fields = array_merge($fields, $extraFields);
        }

        return $class::select($fields)->get();
    }
}
