<?php

use Algling\Phonology\Models\Backness;
use Algling\Phonology\Models\ClusterType;
use Algling\Phonology\Models\ConsonantType;
use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Length;
use Algling\Phonology\Models\Manner;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\Place;
use Algling\Phonology\Models\Voicing;
use Algling\Phonology\Models\VowelType;
use Faker\Generator as Faker;

$factory->define(ClusterType::class, function (Faker $faker) {
    $types = ['vowel', 'consonant'];

    $firstSegmentType  = $faker->randomElement($types);
    $secondSegmentType = $faker->randomElement($types);

    return [
        'firstSegment_id'  => factory(Phoneme::class, $firstSegmentType)->create()->id,
        'secondSegment_id' => factory(Phoneme::class, $secondSegmentType)->create()->id,
    ];
});

$factory->define(ConsonantType::class, function (Faker $faker) {
    return [
        'manner_id'     => $faker->randomElement(Manner::all()->pluck('id')->all()),
        'place_id'      => $faker->randomElement(Place::all()->pluck('id')->all()),
        'voicing_id'    => $faker->randomElement(Voicing::all()->pluck('id')->all()),
        'isRounded'     => $faker->boolean,
        'isPalatalized' => $faker->boolean,
        'isGlottalized' => $faker->boolean
    ];
});

$factory->define(VowelType::class, function (Faker $faker) {
    return [
        'height_id'   => $faker->randomElement(Height::all()->pluck('id')->all()),
        'backness_id' => $faker->randomElement(Backness::all()->pluck('id')->all()),
        'length_id'   => $faker->randomElement(Length::all()->pluck('id')->all()),
        'isNasal'     => $faker->boolean,
        'isRounded'   => $faker->boolean
    ];
});
