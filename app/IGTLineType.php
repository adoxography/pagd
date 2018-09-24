<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IGTLineType extends Model
{
    public $table = 'IGTLineTypes';

    protected $casts = ['align' => 'boolean'];
}
