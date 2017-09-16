<?php

use App\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Morphology\Slot;
use Faker\Generator as Faker;

$factory->define(Morpheme::class, function (Faker $faker) {
    return [
        'name'            => $faker->unique()->word,
        'language_id'     => factory(Language::class)->create()->id,
        'gloss'           => $faker->word,
        'slot_id'         => factory(Slot::class)->create()->id,
        'allomorphyNotes' => $faker->paragraph,
        'historicalNotes' => $faker->paragraph,
        'privateNotes'    => $faker->paragraph,
        'usageNotes'      => $faker->paragraph
    ];
});

$factory->define(Gloss::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->word,
        'abv'         => $faker->unique()->lexify('???'),
        'description' => $faker->paragraph
    ];
});

$factory->define(Slot::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->word,
        'abv'         => $faker->unique()->lexify('???'),
        'description' => $faker->paragraph
    ];
});
