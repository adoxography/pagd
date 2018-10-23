<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    public $table = 'Locations';

    protected $fillable = ['type', 'position'];

    protected $casts = ['position' => 'array'];
}
