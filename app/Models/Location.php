<?php

namespace App\Models;

use App\Models\Model;

class Location extends Model
{
    protected $fillable = ['type', 'position'];

    protected $casts = ['position' => 'array'];

    public static function fieldTemplate($root = true)
    {
        return collect([
            'type' => null,
            'position' => null
        ]);
    }
}
