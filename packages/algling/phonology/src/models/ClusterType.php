<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Phoneme;
use Illuminate\Database\Eloquent\Model;
use Algling\Phonology\Interfaces\PhonemeTypeInterface;

class ClusterType extends Model
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
