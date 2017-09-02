<?php

use App\RuleType;
use Faker\Generator as Faker;

$factory->define(RuleType::class, function (Faker $faker) {
    return [
        'name' => $faker->word
    ];
});
