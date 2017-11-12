<?php

use App\Group;
use App\Language;
use Faker\Generator as Faker;

$factory->define(Language::class, function (Faker $faker) {
    return [
        'name'           => $faker->unique()->name,
        'alternateNames' => $faker->optional()->name,
        'group_id'       => factory(Group::class)->create()->id,
        'iso'            => $faker->unique()->lexify('???'),
        'algoCode'       => $faker->unique()->lexify('???'),
        'notes'          => $faker->optional()->paragraph,
        'parent_id'      => null
    ];
});
