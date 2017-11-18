<?php

namespace App;

interface PhonemeableInterface
{
    public function phonemes();

    public function connectPhonemes();

    public function dropPhonemes();

    public function lookupPhoneme(string $phoneme);

    public function getPhonemePattern();
}
