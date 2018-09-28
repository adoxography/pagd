<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\ConsonantType;
use Illuminate\Database\Eloquent\Model;

class Manner extends Model
{
    public $table = 'Phon_Manners';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(ConsonantType::class, 'manner_id');
    }
}
