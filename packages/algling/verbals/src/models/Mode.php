<?php

namespace Algling\Verbals\Models;

use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    public $table = 'Verb_Modes';
    protected $fillable = [
            'name',
            'description'
    ];
}
