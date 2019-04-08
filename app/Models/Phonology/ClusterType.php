<?php

namespace App\Models\Phonology;

use App\Models\Phonology\PhonemeType;

class ClusterType extends PhonemeType
{
    public $table = 'phon_clusters';
    public $timestamps = false;
    public $name = 'Cluster';

    protected $fillable = [
        'first_segment_id',
        'second_segment_id'
    ];

    protected $with = [
        'firstSegment',
        'secondSegment'
    ];

    public function identifiableName()
    {
        $this->load($this->with);

        return $this->firstSegment->name . $this->secondSegment->name;
    }

    public function getNameAttribute()
    {
        return $this->name;
    }

    public function firstSegment()
    {
        return $this->segment('first_segment_id');
    }

    public function secondSegment()
    {
        return $this->segment('second_segment_id');
    }

    protected function segment($foreign)
    {
        return $this->belongsTo(Phoneme::class, $foreign);
    }
}
