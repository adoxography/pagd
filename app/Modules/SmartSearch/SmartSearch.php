<?php

namespace App\Modules\SmartSearch;

use Algling\Nominals\Models\Paradigm;
use Algling\Nominals\Models\ParadigmType;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;
use Algling\Words\Models\Feature;
use App\Group;
use App\Language;
use App\Modules\SmartSearch\Dictionary;
use App\Modules\SmartSearch\ModelPatternMaker;
use App\Modules\SmartSearch\SingleRouter;
use App\Modules\SmartSearch\UnknownRouter;
use App\Modules\SmartSearch\VerbParadigmRouter;
use Illuminate\Support\Collection;

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
		$this->extract('languages', Language::class, 'alternateNames');
		$this->extract('modes', Mode::class);
		$this->extract('classes', VerbClass::class);
		$this->extract('orders', Order::class);
		$this->extract('groups', Group::class);
		$this->extract('paradigmTypes', ParadigmType::class);

		$this->extractBoolean('negative', 'affirmative');
		$this->extractBoolean('diminutive', 'non-diminutive');

		$this->extractFeatures();
	}

	public function route()
	{
		$router;

		if (count($this->classes) > 0) {

			if (!$this->hasFeatures) {
				$router = new VerbParadigmRouter($this);
			} elseif (count($this->orders) <= 1 && count($this->modes) <= 1) {
				$router = new VerbFormRouter($this);
			}
		} elseif (count($this->matches) == 1 && count($this->{$this->matches[0]}) == 1 && ($this->matches[0] == 'groups' || $this->matches[0] == 'languages')) {
			$router = new SingleRouter($this->matches[0], $this->{$this->matches[0]}[0]);
		} else {
			$router = new UnknownRouter($this->lookup);
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
        $matches;
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

    protected function extractFeatures()
    {
    	$features = \Algling\Words\Models\Feature::all();
    	$dictionary = Dictionary::build($features);
    	$pattern = ModelPatternMaker::generate($features, [], false);
    	$matches;

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