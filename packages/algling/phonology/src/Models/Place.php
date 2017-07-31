<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    public $table = 'Phon_Places';

    protected $fillable = ['name'];
}
