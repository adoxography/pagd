<?php

namespace Algling\Phonology\Observers;

use Algling\Phonology\Models\Phoneme;
use Algling\Words\Models\Example;
use Algling\Words\Models\Form;

class PhonemeObserver
{
    protected $types = [
        Form::class,
        Example::class
    ];

    public function saved(Phoneme $phoneme)
    {
        foreach ($this->types as $type) {
            $this->connectPhonemes($phoneme, $type);
        }
    }

    protected function connectPhonemes(Phoneme $phoneme, string $type)
    {
        $lookup = $type::where('phonemicForm', 'LIKE', '%'.$phoneme->algoName.'%')->get();

        foreach ($lookup as $phonemeable) {
            $phonemeable->phonemes()->attach($phoneme, ['phonemeable_type' => $phonemeable->getMorphType()]);
        }
    }
}
