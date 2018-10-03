<?php

namespace App\Models\Rules;

use Illuminate\Database\Eloquent\Model;

class RuleType extends Model
{
    public $table = 'RuleTypes';

    protected $fillable = ['name'];

    public $timestamps = false;
}
