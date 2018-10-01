<?php

use App\Models\Phonology\Allophone;
use App\Models\Phonology\Phoneme;
use Faker\Generator as Faker;

$factory->define(Allophone::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->randomLetter,
        'environment' => $faker->optional()->sentence,
        'phoneme_id'  => factory(Phoneme::class)->create()->id
    ];
});
