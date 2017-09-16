<?php

use Algling\Nominals\Models\NominalFeature;
use Algling\Nominals\Models\Paradigm;
use Algling\Nominals\Models\ParadigmType;
use Algling\Nominals\Models\PronominalFeature;
use Algling\Nominals\Models\Structure as NominalStructure;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\Structure as VerbStructure;
use Algling\Verbals\Models\VerbClass;
use App\Language;
use Faker\Generator as Faker;

$factory->define(NominalStructure::class, function (Faker $faker) {
    return [
        'pronominalFeature_id' => PronominalFeature::all()->random()->id,
        'nominalFeature_id'    => NominalFeature::all()->random()->id,
        'paradigm_id'          => factory(Paradigm::class)->create()->id,
    ];
});

$factory->define(VerbStructure::class, function (Faker $faker) {
    $arguments = Argument::all();

    return [
        'class_id'           => factory(VerbClass::class)->create()->id,
        'mode_id'            => factory(Mode::class)->create()->id,
        'order_id'           => factory(Order::class)->create()->id,
        'subject_id'         => $arguments->random()->id,
        'primaryObject_id'   => $arguments->random()->id,
        'secondaryObject_id' => $arguments->random()->id,
        'isNegative'         => $faker->boolean,
        'isDiminutive'       => $faker->boolean
    ];
});

$factory->define(Mode::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->name,
        'description' => $faker->paragraph
    ];
});

$factory->define(Order::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->word,
        'description' => $faker->paragraph
    ];
});

$factory->define(VerbClass::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});

$factory->define(Paradigm::class, function (Faker $faker) {
    $types = ParadigmType::all();

    return [
        'name'            => $faker->unique()->word,
        'language_id'     => factory(Language::class)->create()->id,
        'paradigmType_id' => $types->random()->id
    ];
});
