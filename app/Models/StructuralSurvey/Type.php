<?php

namespace App\Models\StructuralSurvey;

use App\Models\Model;

class Type extends Model
{
    public $table = 'ss_types';
    protected $fillable = ['name'];

    public function variables()
    {
    	return $this->hasMany(Variable::class);
    }
}
