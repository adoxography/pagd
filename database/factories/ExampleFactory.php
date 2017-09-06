<?php

use Algling\Words\Models\Example;
use App\Language;
use Faker\Generator as Faker;

$factory->define(Example::class, function (Faker $faker) {
    return [
        'name'         => $faker->word,
        'translation'  => $faker->sentence,
        'publicNotes'  => $faker->paragraph,
        'privateNotes' => $faker->paragraph,
        'phonemicForm' => $faker->word,
        'language_id'  => factory(Language::class)->create()->id
    ];
});
