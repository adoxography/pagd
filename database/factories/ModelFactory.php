<?php

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

$factory->define(App\Form::class, function (Faker\Generator $faker) {
	return [
		'surfaceForm' => $faker->word,
		'language_id' => factory(App\Language::class)->create()->id,
		'morphemicForm' => function (array $post) use ($faker) {
			$morpheme1 = factory(App\Morpheme::class)->create(['language_id' => $post['language_id']]);
			$morpheme2 = factory(App\Morpheme::class)->create(['language_id' => $post['language_id']]);

			return $morpheme1->name . '-V-' . $morpheme2->name;
		},
		'formType_id' => factory(App\FormType::class)->create()->id
	];
});

$factory->define(App\Group::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name
    ];
});

$factory->define(App\Language::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'group_id' => function () {
            return factory(App\Group::class)->create()->id;
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

$factory->define(App\Morpheme::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'language_id' => function () {
            return factory(App\Language::class)->create()->id;
        },
        'gloss_id' => function () {
            return factory(App\Gloss::class)->create()->id;
        },
        'slot_id' => function () {
            return factory(App\Slot::class)->create()->id;
        },
        'allomorphyNotes' => $faker->paragraph,
        'historicalNotes' => $faker->paragraph,
        'comments' => $faker->paragraph
    ];
});

$factory->define(App\FormType::class, function (Faker\Generator $faker) {
    return [
        'class_id' => function () {
            return factory(App\FormClass::class)->create()->id;
        },
        'mode_id' => function () {
            return factory(App\Mode::class)->create()->id;
        },
        'order_id' => function () {
            return factory(App\Order::class)->create()->id;
        },
        'subject_id' => App\Argument::all()->random()->id,
        'primaryObject_id' => App\Argument::all()->random()->id,
        'secondaryObject_id' => App\Argument::all()->random()->id,
        'isNegative' => $faker->numberBetween(0,1),
        'isDiminutive' => $faker->numberBetween(0,1)
    ];
});

$factory->define(App\Argument::class, function (Faker\Generator $faker) {
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

$factory->define(App\FormClass::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word
    ];
});

$factory->define(App\Mode::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph
    ];
});

$factory->define(App\Order::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph
    ];
});

$factory->define(App\Gloss::class, function (Faker\Generator $faker) {
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

$factory->define(App\Slot::class, function (Faker\Generator $faker) {
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
