<?php

namespace App\Modules\SmartSearch;

use Algling\Nominals\Models\ParadigmType;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;
use Algling\Words\Models\Feature;
use App\Group;
use App\Language;

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
	public $firstFeature = '';
	public $secondFeature = '';
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
        if(is_string($alternates)) {
        	$alternates = [$alternates];
        }

    	$collection = $this->query($model, $alternates);
    	$dictionary = Dictionary::build($collection, $alternates);
        $pattern = ModelPatternMaker::generate($collection, $alternates);
        $output = [];

        preg_match_all($pattern, $this->lookup, $matches);

        if(count($matches[0]) > 0) {
        	foreach($matches[0] as $match) {
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
        $languages = Language::select('name', 'alternateNames', 'id')->get();

        foreach($groups as $group) {
            $group->category = 'groups';
        }
        foreach($languages as $language) {
            $language->category = 'languages';
        }

        $collection = $languages->concat($groups);
        $dictionary = Dictionary::build($collection, ['aliases']);
        $pattern = ModelPatternMaker::generate($collection, ['aliases']);
        $output = ['languages' => [], 'groups' => []];

        preg_match_all($pattern, $this->lookup, $matches);

        if(count($matches[0]) > 0) {
            foreach($matches[0] as $match) {
                $output['languages'] = array_merge($output['languages'], $dictionary->lookup($match, 'languages'));
                $output['groups'] = array_merge($output['groups'], $dictionary->lookup($match, 'groups'));
            }

            foreach($output as $key => $value) {
                $this->$key = $value;

                if(count($value) > 0) {
                    $this->matches[] = $key;
                }
            }
        }
    }

    protected function extractFeatures()
    {
    	$features = Feature::all();
    	$dictionary = Dictionary::build($features);
    	$pattern = ModelPatternMaker::generate($features, [], false);

    	$fullPattern = "`(?<=[ ]){$pattern}(-{$pattern})?(\+{$pattern})?(?=[, ])`";

    	if(preg_match($fullPattern, $this->lookup, $matches) > 0) {
    		$this->firstFeature = $dictionary->lookup($matches[1])[0];
    		$this->hasFeatures = true;

    		if(isset($matches[3])) {
    			$this->secondFeature = $dictionary->lookup($matches[3])[0];
    		}

    		if(isset($matches[5])) {
    			$this->secondaryObject = $dictionary->lookup($matches[5])[0];
    		}
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