<?php

namespace Algling\SS\Models;

use Algling\SS\Models\Variable;
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
