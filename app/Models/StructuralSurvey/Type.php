<?php

namespace App\Models\StructuralSurvey;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public $table = 'SS_Types';
    protected $fillable = ['name'];

    public function variables()
    {
    	return $this->hasMany(Variable::class);
    }
}
