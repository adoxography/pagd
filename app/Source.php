<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    public $table = 'Sources';
    protected $fillable = ['short', 'long'];
}
