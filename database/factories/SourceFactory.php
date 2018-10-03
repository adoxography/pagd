<?php

use App\Models\Source;
use Faker\Generator as Faker;

$factory->define(Source::class, function (Faker $faker) {
    return [
        'author'  => $faker->name,
        'year'    => $faker->randomNumber(4, true),
        'summary' => $faker->paragraph,
        'long'    => $faker->paragraph,
        'url'     => $faker->url,
        'notes'   => $faker->paragraph
    ];
});
