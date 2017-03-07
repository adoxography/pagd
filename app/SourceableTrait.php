<?php

namespace App;

trait SourceableTrait {

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
    	$output = $this->morphToMany('App\Source', 'Sourceable')->orderBy('short');

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