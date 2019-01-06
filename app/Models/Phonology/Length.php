<?php

namespace App\Models\Phonology;

use App\Models\Model;
use App\Models\Phonology\VowelType;

class Length extends Model
{
    public $table = 'phon_lengths';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'length_id');
    }
}
