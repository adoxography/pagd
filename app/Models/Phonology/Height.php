<?php

namespace App\Models\Phonology;

use App\Models\Phonology\VowelType;
use Illuminate\Database\Eloquent\Model;

class Height extends Model
{
    public $table = 'Phon_Heights';

    protected $fillable = ['name'];

    public $timestamps = false;

    public function featureSets()
    {
        return $this->hasMany(VowelType::class, 'height_id');
    }
}
