<?php

use App\Models\Phonology\Backness;
use App\Models\Phonology\ClusterType;
use App\Models\Phonology\ConsonantType;
use App\Models\Phonology\Height;
use App\Models\Phonology\Length;
use App\Models\Phonology\Manner;
use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Place;
use App\Models\Phonology\Voicing;
use App\Models\Phonology\VowelType;
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
