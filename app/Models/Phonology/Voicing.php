<?php

namespace App\Models\Phonology;

use App\Models\Model;
use App\Models\Phonology\ConsonantType;

class Voicing extends Model
{
    public $table = 'phon_voicings';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(ConsonantType::class, 'voicing_id');
    }
}
