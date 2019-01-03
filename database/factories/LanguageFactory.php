<?php

use App\Models\Group;
use App\Models\Language;
use Faker\Generator as Faker;

$factory->define(Language::class, function (Faker $faker) {
    return [
        'name'           => $faker->unique()->name,
        'alternate_names' => $faker->optional()->name,
        'group_id'       => factory(Group::class)->create()->id,
        'iso'            => $faker->unique()->lexify('???'),
        'algo_code'       => $faker->unique()->lexify('???'),
        'notes'          => $faker->optional()->paragraph,
        'parent_id'      => null
    ];
});
