<?php

use App\Models\Nominals\Form as NominalForm;
use App\Models\Nominals\Paradigm;
use App\Models\Nominals\Structure as NominalStructure;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Verbs\Structure as VerbStructure;
use App\Models\Words\Form as WordForm;
use App\Language;
use App\Models\Morphology\Morpheme;
use Faker\Generator as Faker;

$factory->define(WordForm::class, function (Faker $faker) {
    $classes = [
        'verb' => [
            'stem' => '-V-',
            'class' => VerbStructure::class,
            'classType' => 'verbStructures'
        ],
        'nominal' => [
            'stem' => '-N-',
            'class' => NominalStructure::class,
            'classType' => 'nominalStructures'
        ]
    ];

    $language = factory(Language::class)->create();
    $type = $faker->randomElement(array_keys($classes));

    if ($type == 'nominal') {
        $paradigm = Factory(Paradigm::class)->create(['language_id' => $language->id]);
        $structure = factory(NominalStructure::class)->create(['paradigm_id' => $paradigm->id]);
    } else {
        $structure = Factory(VerbStructure::class)->create();
    }

    $data = [
        'name'          => $faker->unique()->word,
        'language_id'   => $language->id,
        'morphemicForm' => function (array $form) use ($faker, $classes, $type) {
            $morpheme1 = factory(Morpheme::class)->create([
                'language_id' => $form['language_id']
            ]);
            $morpheme2 = factory(Morpheme::class)->create([
                'language_id' => $form['language_id']
            ]);

            return $morpheme1->name . $classes[$type]['stem'] . $morpheme2->name;
        },
        'phonemicForm'   => $faker->optional()->word,
        'structure_id'   => $structure->id,
        'structure_type' => $classes[$type]['classType']
    ];

    return $data;
});

$factory->define(VerbForm::class, function () {
    return factory(WordForm::class)->states('verb')->raw();
});

$factory->define(NominalForm::class, function () {
    return factory(WordForm::class)->states('nominal')->raw();
});

$factory->state(WordForm::class, 'verb', function (Faker $faker) {
    return [
        'structure_type' => 'verbStructures',
        'structure_id'   => factory(VerbStructure::class)->create()->id
    ];
});

$factory->state(WordForm::class, 'nominal', function (Faker $faker) {
    $language = factory(Language::class)->create();

    $paradigm = factory(Paradigm::class)->create(['language_id' => $language->id]);
    $structure = factory(NominalStructure::class)->create(['paradigm_id' => $paradigm->id]);

    return [
        'language_id'    => $language->id,
        'structure_type' => 'nominalStructures',
        'structure_id'   => $structure->id
    ];
});
