<?php

namespace Algling\Nominals\Models;

use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    public $table = 'Nom_Modes';

    protected $fillable = ['name'];
}
