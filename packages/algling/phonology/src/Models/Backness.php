<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\VowelType;
use Illuminate\Database\Eloquent\Model;

class Backness extends Model
{
    public $table = "Phon_Backnesses";

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'backness_id');
    }
}
