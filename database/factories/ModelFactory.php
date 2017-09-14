<?php

use Algling\Nominals\Models\Form as NominalForm;
use Algling\Nominals\Models\Structure as NominalStructure;
use Algling\Phonology\Models\Allophone;
use Algling\Phonology\Models\Backness;
use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Length;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\VowelType;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\Structure as VerbStructure;
use Algling\Verbals\Models\VerbClass;
use Algling\Words\Models\Form as WordForm;
use App\AbstractPhonemeGenerator;
use App\Group;
use App\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Morphology\Slot;
use Faker\Generator;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name'           => $faker->name,
        'email'          => $faker->unique()->safeEmail,
        'password'       => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Source::class, function (Faker\Generator $faker) {
    return [
        'author'  => $faker->name,
        'year'    => $faker->randomNumber(4, true),
        'summary' => $faker->paragraph,
        'long'    => $faker->paragraph,
        'url'     => $faker->url,
        'notes'   => $faker->paragraph
    ];
});

$factory->define(WordForm::class, function (Faker\Generator $faker) {
    $type = $faker->randomElement(['verb', 'nominal']);
    $type = 'verb';

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

    $data = [
        'name' => $faker->word,
        'language_id' => factory(Language::class)->create()->id,
        'morphemicForm' => function (array $post) use ($faker, $classes, $type) {
            $morpheme1 = factory(Morpheme::class)->create([
                'language_id' => $post['language_id']
            ]);
            $morpheme2 = factory(Morpheme::class)->create([
                'language_id' => $post['language_id']
            ]);

            return $morpheme1->name . $classes[$type]['stem'] . $morpheme2->name;
        },
        'structure_id' => factory($classes[$type]['class'])->create()->id,
        'structure_type' => $classes[$type]['classType']
    ];

    return $data;
});

$factory->define(VerbForm::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'language_id' => factory(Language::class)->create()->id,
        'morphemicForm' => function (array $post) use ($faker) {
            $morpheme1 = factory(Morpheme::class)->create([
                'language_id' => $post['language_id']
            ]);
            $morpheme2 = factory(Morpheme::class)->create([
                'language_id' => $post['language_id']
            ]);

            return $morpheme1->name . '-V-' . $morpheme2->name;
        },
        'structure_id' => factory(VerbStructure::class)->create()->id,
        'structure_type' => 'verbStructures'
    ];
});

// $factory->define(NominalForm::class, function (Faker\Generator $faker) {
//  return [
//      'name' => $faker->word,
//      'language_id' => factory(Language::class)->create()->id,
//      'morphemicForm' => function (array $post) use ($faker) {
//          $morpheme1 = factory(Morpheme::class)->create([
//                 'language_id' => $post['language_id']
//             ]);
//          $morpheme2 = factory(Morpheme::class)->create([
//                 'language_id' => $post['language_id']
//             ]);

//          return $morpheme1->name . '-N-' . $morpheme2->name;
//      },
//      'structure_id' => factory(NominalStructure::class)->create()->id,
//         'structure_type' => 'nominalStructures'
//  ];
// });

$factory->define(Group::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'publicNotes' => $faker->paragraph,
        'privateNotes' => $faker->paragraph
    ];
});

$factory->define(Language::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'alternateNames' => $faker->name,
        'group_id' => factory(Group::class)->create()->id,
        'iso' => function () use ($faker) {
            $output = '';

            for ($i = 0; $i < 3; $i++) {
                $output .= $faker->randomLetter;
            }

            return $output;
        },
        'algoCode' => function () use ($faker) {
            $output = '';

            for ($i = 0; $i < 5; $i++) {
                $output .= $faker->randomLetter;
            }

            return $output;
        },
        'notes' => $faker->paragraph,
        'parent_id' => null
    ];
});

$factory->define(Morpheme::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'language_id' => function () {
            return factory(Language::class)->create()->id;
        },
        'gloss' => $faker->word,
        'slot_id' => function () {
            return factory(Slot::class)->create()->id;
        },
        'allomorphyNotes' => $faker->paragraph,
        'historicalNotes' => $faker->paragraph,
        'privateNotes' => $faker->paragraph
    ];
});

$factory->define(VerbStructure::class, function (Faker\Generator $faker) {
    return [
        'class_id' => function () {
            return factory(VerbClass::class)->create()->id;
        },
        'mode_id' => function () {
            return factory(Mode::class)->create()->id;
        },
        'order_id' => function () {
            return factory(Order::class)->create()->id;
        },
        'subject_id' => Argument::all()->random()->id,
        'primaryObject_id' => Argument::all()->random()->id,
        'secondaryObject_id' => Argument::all()->random()->id,
        'isNegative' => $faker->numberBetween(0, 1),
        'isDiminutive' => $faker->numberBetween(0, 1)
    ];
});

// $factory->define(NominalStructure::class, function (Faker\Generator $faker) {
//     return [
//         'language_id' => factory(Language::class)->create()->id,

//     ]
// });

$factory->define(Argument::class, function (Faker\Generator $faker) {
    $OBVIATIVE_CODES = ['', '\'', '\'\''];
    $NUMBERS         = ['', 's', 'd', 'p'];

    $person        = $faker->randomElement(['0', '1', '2', '3', 'X', '21']);
    $obviativeCode = $faker->numberBetween(0, 2);
    $number        = $faker->numberBetween(0, 3);

    $argument = [
        'name' => $person,
        'person' => $person
    ];

    if ($obviativeCode > 0) {
        $argument['name'] .= $OBVIATIVE_CODES[$obviativeCode];
        $argument['obviativeCode'] = $obviativeCode;
    }

    if ($number > 0) {
        $argument['name'] .= $NUMBERS[$number];
        $argument['number'] = $number;
    }

    return $argument;
});

$factory->define(VerbClass::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word
    ];
});

$factory->define(Mode::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph
    ];
});

$factory->define(Order::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph
    ];
});

$factory->define(Gloss::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'abv'  => function () use ($faker) {
            $output = '';

            for ($i = 0; $i < 3; $i++) {
                $output .= $faker->randomLetter;
            }

            return $output;
        },
        'description' => $faker->paragraph
    ];
});

$factory->define(Slot::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'abv'  => function () use ($faker) {
            $output = '';

            for ($i = 0; $i < 3; $i++) {
                $output .= $faker->randomLetter;
            }

            return $output;
        },
        'description' => $faker->paragraph
    ];
});

$factory->define(Phoneme::class, function (Generator $faker) {
    $generator = new AbstractPhonemeGenerator($faker);

    return $generator->generate();
});

$factory->define(VowelType::class, function (Generator $faker) {
    return [
        'height_id'   => $faker->randomElement(Height::all()->pluck('id')->all()),
        'backness_id' => $faker->randomElement(Backness::all()->pluck('id')->all()),
        'length_id'   => $faker->randomElement(Length::all()->pluck('id')->all()),
        'isNasal'     => $faker->boolean,
        'isRounded'   => $faker->boolean
    ];
});

$factory->define(Allophone::class, function (Generator $faker) {
    return [
        'name' => $faker->randomLetter,
        'environment' => $faker->sentence,
        'phoneme_id' => factory(Phoneme::class)->create()->id
    ];
});
