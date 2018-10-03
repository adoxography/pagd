<?php

namespace App\Models\IGT;

use Illuminate\Database\Eloquent\Model;

class IGTLineType extends Model
{
    public $table = 'IGTLineTypes';

    protected $casts = ['align' => 'boolean'];
}
