<?php

namespace App\Models\Rules;

use App\Models\Model;

class RuleType extends Model
{
    protected $fillable = ['name'];

    public $timestamps = false;
}
