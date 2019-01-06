<?php

namespace App\Models\Phonology;

use App\Models\Model;
use App\Models\Phonology\VowelType;

class Height extends Model
{
    public $table = 'phon_heights';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'height_id');
    }
}
