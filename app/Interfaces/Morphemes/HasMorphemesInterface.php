<?php

namespace App\Interfaces\Morphemes;

interface HasMorphemesInterface
{
    public function morphemes();

    public function connectMorphemes();

    public function getMorphType();

    public function morphemeSequence();

    public function morphemeList();

    public function printMorphemes();

    public function containsMorphemes();

    public function morphemesToJson();
}
