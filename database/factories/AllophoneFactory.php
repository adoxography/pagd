<?php

use Algling\Phonology\Models\Allophone;
use Algling\Phonology\Models\Phoneme;
use Faker\Generator as Faker;

$factory->define(Allophone::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->randomLetter,
        'environment' => $faker->optional()->sentence,
        'phoneme_id'  => factory(Phoneme::class)->create()->id
    ];
});
