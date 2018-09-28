<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\VowelType;
use Illuminate\Database\Eloquent\Model;

class Length extends Model
{
    public $table = 'Phon_Lengths';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'length_id');
    }
}
