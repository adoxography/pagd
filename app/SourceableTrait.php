<?php

namespace App;

trait SourceableTrait {

    public $isSourceable = true;

    protected $shouldConnectSources;

    public static function bootSourceableTrait()
    {
        static::saved(function($model) {
            if(!isset($model->shouldConnectSources) || $model->shouldConnectSources) {
                $sources = request()->sources;
                $model->connectSources($sources);
            }
        });

        static::deleting(function($model) {
            $model->sources()->detach();
        });
    }

    public function connectSources($sources)
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();
        $added = [];

        if($sources) {
            $this->sources()->detach();

            foreach($sources as $source) {
                if(!in_array($source['id'], $added)) {
                    $options = ['sourceable_type' => $type];

                    if($source['extraInfo']) {
                        $options['extraInfo'] = $source['extraInfo'];
                    }

                    $this->sources()->attach($source['id'], $options);
                    $added[] = $source['id'];
                }
            }
        }
    }

    public function sources($includeExtraInfo = true)
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        $output = $this->belongstoMany(Source::class, 'Sourceables', 'sourceable_id')
            ->where('sourceable_type', $type);

    	if($includeExtraInfo) {
    		$output->withPivot('extraInfo');
    	}

    	return $output;
    }

    public function dontConnectSources()
    {
        $this->shouldConnectSources = false;
    }

    public function generalSources()
    {
    	return $this->sources(false);
    }
}