<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\ConsonantType;
use Illuminate\Database\Eloquent\Model;

class Voicing extends Model
{
    public $table = 'Phon_Voicings';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(ConsonantType::class, 'voicing_id');
    }
}
