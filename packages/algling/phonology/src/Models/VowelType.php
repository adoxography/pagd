<?php

namespace Algling\Phonology\Models;

class VowelType extends PhonemeType
{
    public $table = 'Phon_Vowels';
    public $name = 'Vowel';

    public $booleans = [
        'isNasal',
        'isRounded'
    ];

    protected $with = [
        'height',
        'backness',
        'length'
    ];

    protected $fillable = [
        'height_id',
        'backness_id',
        'length_id',
        'isNasal',
        'isRounded'
    ];

    public function height()
    {
        return $this->belongsTo(Height::class);
    }

    public function backness()
    {
        return $this->belongsTo(Backness::class);
    }

    public function length()
    {
        return $this->belongsTo(Length::class);
    }
}
