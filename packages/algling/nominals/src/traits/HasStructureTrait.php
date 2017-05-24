<?php

namespace Algling\Nominals\Traits;

use Algling\Nominals\Models\Structure;

trait HasStructureTrait {

	public static function bootHasStructureTrait() {
		static::saving(function($model) {
			$model->assignStructure();
		});
	}

	public function structure()
	{
		return $this->belongsTo(Structure::class);
	}

	protected function assignStructure()
	{
		$this->structure_id   = $this->getStructure();
		$this->structure_type = 'nominalStructures';
	}

	protected function getStructure()
	{
		$rules = $this->parseStructureData(request()->all());

		$type = Structure::where($rules)->first();

		if(!$type) {
			$type = Structure::create(array_filter($rules, 'strlen'));
		}

		return $type->id;
	}

    protected function parseStructureData($attributes)
    {
    	$data = [];

        $data['pronominalFeature_id'] = $attributes['pronominalFeature_id'];
        $data['nominalFeature_id']    = $attributes['nominalFeature_id'];
        $data['paradigm_id']          = $attributes['paradigm_id'];
        $data['mode_id']              = $attributes['mode_id'];

        return $data;
    }
}