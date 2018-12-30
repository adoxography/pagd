<?php

namespace App\Models\Phonology;

use App\Models\Phonology\ConsonantType;
use Illuminate\Database\Eloquent\Model;

class Manner extends Model
{
    public $table = 'phon_manners';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(ConsonantType::class, 'manner_id');
    }
}
