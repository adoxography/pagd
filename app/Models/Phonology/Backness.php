<?php

namespace App\Models\Phonology;

use App\Models\Phonology\VowelType;
use Illuminate\Database\Eloquent\Model;

class Backness extends Model
{
    public $table = "Phon_Backnesses";

    public $timestamps = false;

    protected $fillable = ['name'];

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'backness_id');
    }
}
