<?php

use App\Models\Verbs\VerbClass;
use Faker\Generator as Faker;

$factory->define(VerbClass::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
