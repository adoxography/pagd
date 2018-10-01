<?php

namespace App\Models\Words;

class FormRepository {

	protected $repo;
	protected $formType;

	public function __construct(string $formType)
	{
		$this->formType = $formType;
	}

	public function get(array $options)
	{
        if(!isset($this->repo)) {
            $this->repo = $this->load($options);
        }

        return $this->repo;
	}

	public function load(array $options, $with = [])
	{
	    $this->repo = $this->query($options, $with)->get();
	}

	public function query(array $options, $with = [])
	{
		$pivotTable   = $options['pivotTable'];
		$morphIDKey   = $options['morphIDKey'];
		$morphTypeKey = $options['morphTypeKey'];
		$foreignKey   = $options['foreignKey'];
		$id           = $options['id'];

	    $query = ($this->formType)::select('Word_Forms.*')
	        ->join($pivotTable, function($join) use($morphIDKey, $morphTypeKey) {
	            $join->on('Word_Forms.id', '=', $morphIDKey)
	                ->where($morphTypeKey, 'forms');
	        })->where($foreignKey, $id);

	    foreach($with as $eagerLoad) {
	        $query->with($eagerLoad);
	    }

	    return $query;
	}
}
