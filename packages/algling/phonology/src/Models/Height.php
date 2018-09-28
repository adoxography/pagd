<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\VowelType;
use Illuminate\Database\Eloquent\Model;

class Height extends Model
{
    public $table = 'Phon_Heights';

    protected $fillable = ['name'];

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'height_id');
    }
}
