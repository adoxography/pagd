<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gloss extends Model
{
    public $table = 'Glosses';
    public static $singular = 'Gloss';
    public static $plural = 'Glosses';

    protected $fillable = ['name', 'abv', 'description'];
}
