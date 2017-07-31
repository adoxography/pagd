<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

class Height extends Model
{
    public $table = 'Phon_Heights';

    protected $fillable = ['name'];
}
