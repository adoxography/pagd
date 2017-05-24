<?php

namespace Algling\Nominals\Models;

use Algling\Nominals\Models\Mode;
use Algling\Words\Models\Feature;
use Algling\Nominals\Models\Paradigm;
use Illuminate\Database\Eloquent\Model;

class Structure extends Model
{
    public $table = 'Nom_Structures';

    protected $fillable = ['pronominalFeature_id', 'nominalFeature_id', 'paradigm_id', 'mode_id'];

    public function pronominalFeature()
    {
   		return $this->belongsTo(Feature::class, 'pronominalFeature_id');
    }

    public function nominalFeature()
    {
    	return $this->belongsTo(Feature::class, 'nominalFeature_id');
    }

    public function paradigm()
    {
    	return $this->belongsTo(Paradigm::class);
    }

    public function mode()
    {
    	return $this->belongsTo(Mode::class);
    }

    public function renderSummary()
    {
        return '';
    }
}
