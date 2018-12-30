<?php

namespace App\Models\Phonology;

use App\Models\Phonology\ConsonantType;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    public $table = 'phon_places';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(ConsonantType::class, 'place_id');
    }
}
