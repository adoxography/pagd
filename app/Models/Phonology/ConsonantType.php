<?php

namespace App\Models\Phonology;

class ConsonantType extends PhonemeType
{
    public $table = 'Phon_Consonants';
    public $name = 'Consonant';

    protected $fillable = [
        'manner_id',
        'place_id',
        'voicing_id',
        'isRounded',
        'isPalatalized',
        'isGlottalized'
    ];

    protected $with = [
        'manner',
        'place',
        'voicing'
    ];

    public $booleans = [
        'isRounded',
        'isPalatalized',
        'isGlottalized'
    ];

    public function manner()
    {
        return $this->belongsTo(Manner::class);
    }

    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    public function voicing()
    {
        return $this->belongsTo(Voicing::class);
    }
}
