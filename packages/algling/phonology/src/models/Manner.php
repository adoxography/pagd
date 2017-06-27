<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

class Manner extends Model
{
    public $table = 'Phon_Manners';

    protected $fillable = ['name'];
}
