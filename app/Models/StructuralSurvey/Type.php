<?php

namespace App\Models\StructuralSurvey;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    public $table = 'ss_types';
    protected $fillable = ['name'];

    public function variables()
    {
    	return $this->hasMany(Variable::class);
    }
}
