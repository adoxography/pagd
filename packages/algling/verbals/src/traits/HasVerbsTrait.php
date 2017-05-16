<?php

namespace Algling\Verbals\Traits;

use Algling\Verbals\Models\Gap;
use Algling\Verbals\Models\Form;
use Algling\Words\Models\Example;
use Algling\Verbals\Models\Structure;

trait HasVerbsTrait {

	protected $verbParadigms;
	protected $verbParadigmsLoaded = false;

	public function forms()
	{
		return $this->hasMany(Form::class);
	}

	public function gaps()
	{
		return $this->hasMany(Gap::class);
	}

    public function examples()
    {
        return $this->hasManyThrough(Example::class, Form::class);
    }

    protected function queryParadigms()
    {
    	$language = $this->id;

    	return Structure::select('class_id', 'order_id', 'mode_id')
    		->whereHas('forms', function($query) use ($language) {
    			$query->where('language_id', $language);
    		})->groupBy('class_id', 'order_id', 'mode_id');
    }

    public function loadParadigms()
    {
        $output = [];
        $this->verbParadigmsLoaded = true;

        $paradigms = $this->queryParadigms()->get();

        foreach($paradigms as $paradigm) {
            $output["{$paradigm->order->name} {$paradigm->mode->name}:"][] = [
                'order' => $paradigm->order,
                'mode'  => $paradigm->mode,
                'class' => $paradigm->formClass
            ];
        }

        $this->verbParadigms = $output;	
    }

    public function countParadigms()
    {
		if(!$this->verbParadigmsLoaded) {
			$this->loadParadigms();
		}

    	return count($this->verbParadigms);
    }

	public function getParadigmsAttribute()
	{
		if(!$this->verbParadigmsLoaded) {
			$this->loadParadigms();
		}

		return $this->verbParadigms;
	}
}