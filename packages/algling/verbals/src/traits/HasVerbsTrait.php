<?php

namespace Algling\Verbals\Traits;

use Algling\Verbals\Models\Gap;
use Algling\Verbals\Models\Form;
use Algling\Verbals\Models\Structure;
use App\Traits\HasWordsTrait;

trait HasVerbsTrait {
	use HasWordsTrait;

	protected $verbParadigms;
	protected $verbParadigmsLoaded = false;

	public function verbForms()
	{
		return $this->hasMany(Form::class);
	}

	public function verbGaps()
	{
		return $this->hasMany(Gap::class);
	}

	public function verbExamples()
	{
		return $this->examples()->ofType('verbStructures');
	}

    protected function queryVerbParadigms()
    {
    	$language = $this->id;

    	return Structure::select('class_id', 'order_id', 'mode_id')
    		->whereHas('forms', function($query) use ($language) {
    			$query->where('language_id', $language);
    		})->groupBy('class_id', 'order_id', 'mode_id');
    }

    public function loadVerbParadigms()
    {
        $output = [];
        $this->verbParadigmsLoaded = true;

        $paradigms = $this->queryVerbParadigms()->get();

        foreach($paradigms as $paradigm) {
            $output["{$paradigm->order->name} {$paradigm->mode->name}:"][] = [
                'order' => $paradigm->order,
                'mode'  => $paradigm->mode,
                'class' => $paradigm->formClass
            ];
        }

        $this->verbParadigms = $output;	
    }

    public function countVerbParadigms()
    {
		if(!$this->verbParadigmsLoaded) {
			$this->loadVerbParadigms();
		}

    	return count($this->verbParadigms);
    }

	public function getVerbParadigmsAttribute()
	{
		if(!$this->verbParadigmsLoaded) {
			$this->loadVerbParadigms();
		}

		return $this->verbParadigms;
	}
}
