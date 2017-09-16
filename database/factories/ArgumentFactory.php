<?php

use Algling\Verbals\Models\Argument;
use Faker\Generator as Faker;

$factory->define(Argument::class, function (Faker $faker) {
    $OBVIATIVE_CODES = ['', '\'', '\'\''];
    $NUMBERS         = ['', 's', 'd', 'p'];

    $person        = $faker->randomElement(['0', '1', '2', '3', 'X', '21']);
    $obviativeCode = $faker->numberBetween(0, 2);
    $number        = $faker->numberBetween(0, 3);

    $argument = [
        'name' => $person,
        'person' => $person
    ];

    if ($obviativeCode > 0) {
        $argument['name'] .= $OBVIATIVE_CODES[$obviativeCode];
        $argument['obviativeCode'] = $obviativeCode;
    }

    if ($number > 0) {
        $argument['name'] .= $NUMBERS[$number];
        $argument['number'] = $number;
    }

    return $argument;
});
