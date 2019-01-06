<?php

namespace App\Models;

use App\Models\Model;

class Location extends Model
{
    protected $fillable = ['type', 'position'];

    protected $casts = ['position' => 'array'];

    protected static $template = ['type' => null, 'position' => null];
}
