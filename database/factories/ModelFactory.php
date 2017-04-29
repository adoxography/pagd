<?php

use App\Group;
use App\Language;
use Algling\Verbals\Models\Form;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Morphemes\Models\Slot;
use Algling\Morphemes\Models\Gloss;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\Structure;
use Algling\Verbals\Models\VerbClass;
use Algling\Morphemes\Models\Morpheme;

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
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Source::class, function (Faker\Generator $faker) {
    return [
        'author' => $faker->name,
        'year' => $faker->randomNumber(4, true),
        'summary' => $faker->paragraph,
        'long' => $faker->paragraph,
        'url' => $faker->url,
        'notes' => $faker->paragraph
    ];
});

$factory->define(Form::class, function (Faker\Generator $faker) {
	return [
		'name' => $faker->word,
		'language_id' => factory(Language::class)->create()->id,
		'morphemicForm' => function (array $post) use ($faker) {
			$morpheme1 = factory(Morpheme::class)->create(['language_id' => $post['language_id']]);
			$morpheme2 = factory(Morpheme::class)->create(['language_id' => $post['language_id']]);

			return $morpheme1->name . '-V-' . $morpheme2->name;
		},
		'structure_id' => factory(Structure::class)->create()->id,
        'structure_type' => Structure::class
	];
});

$factory->define(Group::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name
    ];
});

$factory->define(Language::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'group_id' => function () {
            return factory(Group::class)->create()->id;
        },
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
        }
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

$factory->define(Structure::class, function (Faker\Generator $faker) {
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
        'isNegative' => $faker->numberBetween(0,1),
        'isDiminutive' => $faker->numberBetween(0,1)
    ];
});

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
