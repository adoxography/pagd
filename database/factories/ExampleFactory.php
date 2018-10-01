<?php

use App\Models\Words\Example;
use App\Language;
use Faker\Generator as Faker;

$factory->define(Example::class, function (Faker $faker) {
    return [
        'name'         => $faker->word,
        'translation'  => $faker->sentence,
        'publicNotes'  => $faker->optional()->paragraph,
        'privateNotes' => $faker->optional()->paragraph,
        'phonemicForm' => $faker->optional()->word,
        'language_id'  => factory(Language::class)->create()->id
    ];
});
