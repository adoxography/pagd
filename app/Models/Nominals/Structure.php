<?php

namespace App\Models\Nominals;

use App\Models\Nominals\Paradigm;
use App\Models\Nominals\PronominalFeature;
use App\Models\Nominals\NominalFeature;
use App\Models\Model;
use App\Models\Words\Feature;
use App\Presenters\Nominals\StructurePresenter;

class Structure extends Model
{
    public $table = 'nom_structures';

    protected $fillable = ['pronominal_feature_id', 'nominal_feature_id', 'paradigm_id'];

    public $with = ['pronominalFeature', 'nominalFeature', 'paradigm'];

    public static $template = [
        'paradigm' => Paradigm::class,
        'pronominal_feature' => PronominalFeature::class,
        'nominal_feature' => NominalFeature::class
    ];

    public $presenter = StructurePresenter::class;
    public $presenterDefaultMethod = 'summary';

    public function getSummaryAttribute()
    {
        return $this->renderSummary();
    }

    public function pronominalFeature()
    {
   		return $this->belongsTo(Feature::class, 'pronominal_feature_id');
    }

    public function nominalFeature()
    {
    	return $this->belongsTo(Feature::class, 'nominal_feature_id');
    }

    public function paradigm()
    {
    	return $this->belongsTo(Paradigm::class);
    }

    public function forms()
    {
        return $this->hasMany(Form::class, 'structure_id');
    }

    public function renderSummary()
    {
        $output = "";

        if($this->pronominalFeature) {
            $output .= $this->pronominalFeature->name;

            if($this->nominalFeature) {
                $output .= '—' . $this->nominalFeature->name;
            }
        } else {
            $output .= $this->nominalFeature->name;
        }

        $output .= " <a href='/nominals/paradigms/{$this->paradigm->id}'>{$this->paradigm->name}</a>";

        return $output;
    }
}
