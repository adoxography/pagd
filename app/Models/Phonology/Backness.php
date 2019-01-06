<?php

namespace App\Models\Phonology;

use App\Models\Model;
use App\Models\Phonology\VowelType;

class Backness extends Model
{
    public $table = "phon_backnesses";

    public $timestamps = false;

    protected $fillable = ['name'];

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'backness_id');
    }
}
