<?php

namespace App\Models\Rules;

use Illuminate\Database\Eloquent\Model;

class RuleType extends Model
{
    protected $fillable = ['name'];

    public $timestamps = false;
}
