<?php

use Algling\Phonology\Models\ClusterType;
use Algling\Phonology\Models\ConsonantType;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\Reflex;
use Algling\Phonology\Models\VowelType;
use App\Language;
use Faker\Generator as Faker;

$factory->define(Phoneme::class, function (Faker $faker) {
    $types = [
        'vowelTypes'     => VowelType::class,
        'consonantTypes' => ConsonantType::class,
        'clusterTypes'   => ClusterType::class
    ];

    $type = $this->faker->randomElement(array_keys($types));

    $data = [
            'language_id'      => factory(Language::class)->create()->id,
            'algoName'         => $this->faker->randomLetter,
            'ipaName'          => $this->faker->randomLetter,
            'orthoName'        => $this->faker->randomLetter,
            'phoneticNotes'    => $this->faker->paragraph,
            'orthoNotes'       => $this->faker->paragraph,
            'privateNotes'     => $this->faker->paragraph,
            'isMarginal'       => $this->faker->boolean,
            'isArchiphoneme'   => $this->faker->boolean,
            'phonemeable_type' => $type,
            'phonemeable_id'   => factory($types[$type])->create()->id
        ];

    if ($data['isArchiphoneme']) {
        $data['archiphonemeDescription'] = $this->faker->sentence;
    }

    return $data;
});

$factory->defineAs(Phoneme::class, 'consonant', function (Faker $faker) {
    $data = [
            'language_id'      => factory(Language::class)->create()->id,
            'algoName'         => $this->faker->randomLetter,
            'ipaName'          => $this->faker->randomLetter,
            'orthoName'        => $this->faker->randomLetter,
            'phoneticNotes'    => $this->faker->paragraph,
            'orthoNotes'       => $this->faker->paragraph,
            'privateNotes'     => $this->faker->paragraph,
            'isMarginal'       => $this->faker->boolean,
            'isArchiphoneme'   => $this->faker->boolean,
            'phonemeable_type' => 'consonantTypes',
            'phonemeable_id'   => factory(ConsonantType::class)->create()->id
        ];

    if ($data['isArchiphoneme']) {
        $data['archiphonemeDescription'] = $this->faker->sentence;
    }

    return $data;
});

$factory->defineAs(Phoneme::class, 'vowel', function (Faker $faker) {
    $data = [
            'language_id'      => factory(Language::class)->create()->id,
            'algoName'         => $this->faker->randomLetter,
            'ipaName'          => $this->faker->randomLetter,
            'orthoName'        => $this->faker->randomLetter,
            'phoneticNotes'    => $this->faker->paragraph,
            'orthoNotes'       => $this->faker->paragraph,
            'privateNotes'     => $this->faker->paragraph,
            'isMarginal'       => $this->faker->boolean,
            'isArchiphoneme'   => $this->faker->boolean,
            'phonemeable_type' => 'vowelTypes',
            'phonemeable_id'   => factory(VowelType::class)->create()->id
        ];

    if ($data['isArchiphoneme']) {
        $data['archiphonemeDescription'] = $this->faker->sentence;
    }

    return $data;
});

$factory->defineAs(Phoneme::class, 'cluster', function (Faker $faker) {
    $data = [
            'language_id'      => factory(Language::class)->create()->id,
            'algoName'         => $this->faker->randomLetter,
            'ipaName'          => $this->faker->randomLetter,
            'orthoName'        => $this->faker->randomLetter,
            'phoneticNotes'    => $this->faker->paragraph,
            'orthoNotes'       => $this->faker->paragraph,
            'privateNotes'     => $this->faker->paragraph,
            'isMarginal'       => $this->faker->boolean,
            'isArchiphoneme'   => $this->faker->boolean,
            'phonemeable_type' => 'clusterTypes',
            'phonemeable_id'   => factory(ClusterType::class)->create()->id
        ];

    if ($data['isArchiphoneme']) {
        $data['archiphonemeDescription'] = $this->faker->sentence;
    }

    return $data;
});

$factory->define(Reflex::class, function (Faker $faker) {
    $language = factory(Language::class)->create();

    return [
        'parent_id' => factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]),
        'reflex_id' => factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]),
        'language_id' => $language->id,
        'environment' => $faker->randomLetter(),
        'publicNotes' => $faker->paragraph(),
        'privateNotes' => $faker->paragraph()
    ];
});
