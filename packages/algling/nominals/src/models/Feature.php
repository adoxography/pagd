<?php

namespace Algling\Nominals\Models;

use Illuminate\Database\Eloquent\Model;
use Algling\Nominals\Models\FeatureType;

class Feature extends Model
{
    public $table = 'Nom_Features';

    public function type()
    {
    	return $this->featureType();
    }

    public function featureType()
    {
    	return $this->belongsTo(FeatureType::class);
    }
}