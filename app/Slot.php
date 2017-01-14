<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    public $table = 'Slots';

    protected $fillable = ['name', 'abv', 'description'];
}
