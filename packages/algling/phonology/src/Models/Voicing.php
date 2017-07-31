<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

class Voicing extends Model
{
    public $table = 'Phon_Voicings';

    protected $fillable = ['name'];
}
