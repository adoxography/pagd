<?php

namespace App\Traits;

use DB;
use App\Models\Phonology\Phoneme;

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

        $this->dropPhonemes();

        preg_match_all("/.{$this->specialCharacterPattern()}*/u", $this->phonemicForm, $phonemes);

        foreach ($phonemes[0] as $symbol) {
            $phoneme = $this->lookupPhoneme($symbol);

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
     * @return App\Models\Phonology\Phoneme|null
     */
    public function lookupPhoneme(string $phoneme)
    {
        $lookup = Phoneme::where('language_id', $this->language_id)
            ->whereRaw('BINARY algoName = ?', [$phoneme])
            ->get();

        if ($lookup->count() > 1) {
            $encoding = mb_internal_encoding();
            $phoneme = mb_strtolower($phoneme);

            $lookup = $lookup->filter(function ($result) use ($phoneme, $encoding) {
                return strcmp(mb_strtolower($result->algoName, $encoding), $phoneme) == 0;
            });
        }

        return $lookup->first();
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

    public function getPhonemePattern()
    {
        $pattern = '';

        $this->phonemes->pluck('algoName')
            ->sortByDesc(function ($phoneme) {
                return strlen($phoneme);
            })
            ->each(function ($phoneme) use (&$pattern) {
                if (strlen($pattern) > 0) {
                    $pattern .= '|';
                }
                $pattern .= str_replace(['*', '/', '\\', '[', ']'], '', $phoneme);
            });

        return $pattern;
    }
}
