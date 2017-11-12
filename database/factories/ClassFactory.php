<?php

use Algling\Verbals\Models\VerbClass;
use Faker\Generator as Faker;

$factory->define(VerbClass::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
