<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Argument extends Model
{
    public $table = 'Arguments';

    protected $fillable = ['name', 'person', 'obviativeCode', 'number'];
}
