<?php

namespace App;

trait DisambiguatableTrait {

	public static function bootDisambiguatableTrait()
	{
		static::creating(function($model) {
			$model->assignDisambiguator();
		});

		static::updating(function($model) {
			if($model->shouldUpdateDisambiguator()) {
				$model->assignDisambiguator();
			}
		});
	}

	public function getDisambiguatableFields()
	{
		if(isset($this->disambiguatableFields)) {
			return $this->disambiguatableFields;
		} else {
			return [];
		}
	}

	public function getShouldAlwaysAssignDisambiguator()
	{
		return !isset($this->shouldAlwaysAssignDisambiguator) || $this->shouldAlwaysAssignDisambiguator;
	}

	public function shouldUpdateDisambiguator()
	{
		$shouldUpdate = false;
		$fields = $this->getDisambiguatableFields();

		foreach($this->getDirty() as $key => $value) {
			$shouldUpdate = $shouldUpdate || in_array($key, $fields);
		}

		return $shouldUpdate;
	}

	public function assignDisambiguator()
	{
		$duplicates = $this->loadAmbiguousDuplicates();

		if($this->getShouldAlwaysAssignDisambiguator() || count($duplicates) > 0) {
			if(count($duplicates) == 1) {
				$duplicate = $duplicates[0];
				$duplicate->disambiguator = 1;

				if(isset($this->isSourceable)) {
					$duplicate->dontConnectSources();
				}

				$duplicate->save();
			}

			$this->disambiguator = $this->firstOpenSpace($duplicates);
		} else {
			$this->disambiguator = null;
		}
	}

    protected function firstOpenSpace($changes)
    {
        $found = false;
        $i = 1;

        while($i <= count($changes) && !$found) {
            $found = ($i != $changes[$i - 1]->disambiguator);

            if(!$found) {
                $i++;
            }
        }

        return $i;
    }

    protected function loadAmbiguousDuplicates()
    {
    	// Begin the query
        $query = (get_class($this))::orderBy('disambiguator');

        // Constrain all the relevant fields
        foreach($this->getDisambiguatableFields() as $field) {
        	$query->where($field, $this->$field);
        }

        if(isset($this->id)) {
        	$query->where('id', '<>', $this->id);
        }
        
        // Return the result
        return $query->get();
    }
}