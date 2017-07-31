<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

class Length extends Model
{
    public $table = 'Phon_Lengths';

    protected $fillable = ['name'];
}
