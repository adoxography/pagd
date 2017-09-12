<?php

namespace App\Traits;

use DB;
use Algling\Phonology\Models\Phoneme;

trait Phonemeable
{
    /**
     * Boot the phonemeable trait
     */
    public static function bootPhonemeable()
    {
        static::saved(function ($model) {
            $model->connectPhonemes();
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

        DB::table('phonemeables')
          ->where('phonemeable_type', $this->getMorphType())
          ->where('phonemeable_id', $this->id)
          ->delete();

        while ($i < strlen($this->phonemicForm)) {
            $phoneme = $this->lookupPhoneme($i);

            if ($phoneme && !in_array($phoneme->id, $added)) {
                $this->phonemes()->attach($phoneme->id, ['phonemeable_type' => $this->getMorphType()]);
                $added[] = $phoneme->id;
            }

            // Advance the index the length of the found phoneme, or 1 if none was found
            $i += $phoneme ? strlen($phoneme->algoName) : 1;
        }
    }

    /**
     * Look up the phoneme at the given index
     *
     * @param  int $index
     * @return Algling\Phonology\Models\Phoneme|null
     */
    public function lookupPhoneme(int $index)
    {
        $phoneme = $this->lookupPhonemeWithDiacritic($index);

        if (!$phoneme) {
            $phoneme = Phoneme::where('algoName', $this->phonemicForm{$index})
                              ->first();
        }

        return $phoneme;
    }

    /**
     * Look up the phoneme at the given index, assuming the next character is a diacritic
     *
     * @param  int $index
     * @return Algling\Phonology\Models\Phoneme|null
     */
    protected function lookupPhonemeWithDiacritic(int $index)
    {
        $lookup = null;

        if ($index < strlen($this->phonemicForm) - 1) {
            $lookup = Phoneme::where('algoName', mb_substr($this->phonemicForm, $index, 2))
                             ->first();
        }

        return $lookup;
    }
}
