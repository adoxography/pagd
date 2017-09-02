<?php

use App\Language;
use App\Rule;
use App\RuleType;
use Faker\Generator as Faker;

$factory->define(Rule::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'abv' => $faker->word,
        'rule' => $faker->sentence,
        'language_id' => factory(Language::class)->create()->id,
        'type_id' => factory(RuleType::class)->create()->id,
        'publicComments' => $faker->paragraph,
        'privateComments' => $faker->paragraph,
    ];
});
