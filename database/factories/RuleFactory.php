<?php

use App\Language;
use App\Rule;
use App\RuleType;
use Faker\Generator as Faker;

$factory->define(Rule::class, function (Faker $faker) {
    return [
        'name'            => $faker->unique()->word,
        'abv'             => $faker->unique()->word,
        'rule'            => $faker->sentence,
        'language_id'     => factory(Language::class)->create()->id,
        'type_id'         => factory(RuleType::class)->create()->id,
        'publicComments'  => $faker->optional()->paragraph,
        'privateComments' => $faker->optional()->paragraph,
    ];
});

$factory->define(RuleType::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
