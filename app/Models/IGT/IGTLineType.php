<?php

namespace App\Models\IGT;

use App\Models\Model;

class IGTLineType extends Model
{
    public $table = 'igt_line_types';

    protected $casts = ['align' => 'boolean'];
}
