<?php

namespace App;

trait SourceableTrait {

    public static function bootSourceableTrait()
    {
        static::saved(function($model) {
            $sources = request()->sources;
            $model->connectSources($sources);
        });

        static::deleting(function($model) {
            $model->sources()->detach();
        });
    }

    public function connectSources($sources)
    {
        $added = [];

        if($sources) {
            $this->sources()->detach();

            foreach($sources as $source) {
                if(!in_array($source['id'], $added)) {
                    $this->sources()->attach($source['id'], ($source['extraInfo'] ? ['extraInfo' => $source['extraInfo']] : []));
                    $added[] = $source['id'];
                }
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