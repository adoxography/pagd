<?php

namespace App;

trait SourceableTrait
{
    public $isSourceable = true;

    protected $newSources = null;

    public function __construct($options = [])
    {
        $this->fillable[] = 'sources';

        parent::__construct($options);
    }

    public static function bootSourceableTrait()
    {
        static::saving(function ($model) {
            $model->extractSources();
        });

        static::saved(function ($model) {
            $model->syncSources();
        });

        static::deleting(function ($model) {
            $model->sources()->detach();
        });
    }

    /**
     * Strips off any sources that may have come with the save command and add them to a dedicated array so they won't
     * interfere with database propogation.
     */
    public function extractSources()
    {
        $dirty = $this->getDirty();

        if (isset($dirty['sources'])) {
            $newSources = [];

            foreach ($dirty['sources'] as $source) {
                $id = isset($source['id']) ? $source['id'] : Source::create($source);
                $extraInfo = isset($source['extraInfo']) ? $source['extraInfo'] : null;

                $newSources[] = [
                    'id'        => $id,
                    'extraInfo' => $extraInfo
                ];
            }

            $this->newSources = $newSources;
            unset($this['sources']);
        }
    }

    public function connectSource($source)
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        if ($source) {
            $options = [
                'sourceable_type' => $type,
                'extraInfo'       => isset($source['extraInfo']) ? $source['extraInfo'] : null
            ];

            $this->sources()->attach($source['id'], $options);
        }
    }

    public function connectSources($sources)
    {
        $added = [];

        if ($sources) {
            foreach ($sources as $source) {
                if (!in_array($source['id'], $added)) {
                    $this->connectSource($source);
                    $added[] = $source['id'];
                }
            }
        }
    }

    public function syncSources($sources = null)
    {
        if ($sources === null && isset($this['newSources'])) {
            $sources = $this->newSources;
            $this->newSources = null;
        }

        if ($sources !== null) {
            $this->sources()->detach();
            $this->connectSources($sources);
        }
    }

    public function sources($includeExtraInfo = true)
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        $output = $this->belongsToMany(Source::class, 'Sourceables', 'sourceable_id')
            ->where('sourceable_type', $type);

        if ($includeExtraInfo) {
            $output->withPivot('extraInfo');
        }

        return $output;
    }

    public function generalSources()
    {
        return $this->sources(false);
    }
}
