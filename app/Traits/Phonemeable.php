<?php

namespace App\Traits;

use DB;
use Algling\Phonology\Models\Phoneme;

trait Phonemeable
{
    public $specialCharacters = ["\u0301", "\u0300", "\u0302", "\u0306", "\u0304", "\u0303", "ː", "·"];

    /**
     * Boot the phonemeable trait
     */
    public static function bootPhonemeable()
    {
        static::saved(function ($model) {
            if ($model->phonemicForm) {
                $model->connectPhonemes();
            }
        });

        static::deleting(function ($model) {
            $model->dropPhonemes();
        });
    }

    /**
     * Dynamically retrieve the phonemes relation from the database.
     *
     * @return Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function phonemes()
    {
        $type = $this->morphCode ? $this->morphCode : $this->getMorphClass();

        return $this->belongsToMany(
            Phoneme::class,
            'phonemeables',
            'phonemeable_id'
        )->where('phonemeable_type', $type);
    }

    /**
     * Connect all of the known phonemes to this model, using the phonemic form as a reference.
     */
    public function connectPhonemes()
    {
        $added = [];
        $i = 0;

        $this->dropPhonemes();

        preg_match_all("/.{$this->specialCharacterPattern()}*/", $this->phonemicForm, $phonemes);

        foreach ($phonemes[0] as $phoneme) {
            $phoneme = $this->lookupPhoneme($phoneme);

            if ($phoneme && !in_array($phoneme->id, $added)) {
                $this->phonemes()->attach($phoneme->id, ['phonemeable_type' => $this->getMorphType()]);
                $added[] = $phoneme->id;
            }
        }
    }

    /**
     * Look up the phoneme at the given index
     *
     * @param  string $phoneme
     * @return Algling\Phonology\Models\Phoneme|null
     */
    public function lookupPhoneme(string $phoneme)
    {
        return Phoneme::where('language_id', $this->language_id)->where('algoName', $phoneme)->first();
    }

    public function dropPhonemes()
    {
        DB::table('phonemeables')
          ->where('phonemeable_type', $this->getMorphType())
          ->where('phonemeable_id', $this->id)
          ->delete();
    }

    protected function specialCharacterPattern()
    {
        $characters = implode($this->specialCharacters);

        return '[' . json_decode('"'.$characters.'"') . ']';
    }
}
