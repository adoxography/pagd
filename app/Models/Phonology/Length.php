<?php

namespace App\Models\Phonology;

use App\Models\Phonology\VowelType;
use Illuminate\Database\Eloquent\Model;

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
