<?php

namespace App\Models\IGT;

use Illuminate\Database\Eloquent\Model;

class IGTLineType extends Model
{
    public $table = 'igt_line_types';

    protected $casts = ['align' => 'boolean'];
}
