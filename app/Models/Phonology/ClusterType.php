<?php

namespace App\Models\Phonology;

class ClusterType extends PhonemeType
{
    public $table = 'Phon_Clusters';
    public $timestamps = false;
    public $name = 'Cluster';

    protected $fillable = [
        'firstSegment_id',
        'secondSegment_id'
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
        return $this->segment('firstSegment_id');
    }

    public function secondSegment()
    {
        return $this->segment('secondSegment_id');
    }

    protected function segment($foreign)
    {
        return $this->belongsTo(Phoneme::class, $foreign);
    }
}
