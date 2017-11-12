<?php

use App\Group;
use Faker\Generator as Faker;

$factory->define(Group::class, function (Faker $faker) {
    return [
        'name'         => $faker->unique()->name,
        'publicNotes'  => $faker->optional()->paragraph,
        'privateNotes' => $faker->optional()->paragraph
    ];
});
