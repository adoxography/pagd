<?php

namespace App;

trait SourceableTrait {

	protected function getSourceableTable()
	{
		return $this->sourceableTable;
	}

    public function connectSources($sources)
    {
        if($sources) {
            $this->sources()->detach();

            foreach($sources as $source) {
                $this->sources()->attach($source['id'], ($source['extraInfo'] ? ['extraInfo' => $source['extraInfo']] : []));
            }
        }
    }

    public function sources($includeExtraInfo = true)
    {
    	$output = $this->belongsToMany(Source::class, $this->getSourceableTable())->orderBy('short');

    	if($includeExtraInfo) {
    		$output->withPivot('extraInfo');
    	}

    	return $output;
    }

    public function generalSources()
    {
    	return $this->sources(false);
    }
}