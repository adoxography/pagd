<?php

namespace App;

use Algling\Phonology\Models\VowelType;
use Faker\Generator;

class AbstractPhonemeGenerator
{
    protected $faker;

    public function __construct(Generator $faker = null)
    {
        $this->faker = $faker ?: new Generator;
    }

    public static function handle($type = 'vowelTypes') : array
    {
        $generator = new AbstractPhonemeGenerator;
        return $generator->generate($type);
    }

    public function generate(string $type = 'vowelTypes') : array
    {
        $data = [
            'language_id'    => factory(Language::class)->create()->id,
            'algoName'       => $this->faker->randomLetter,
            'ipaName'        => $this->faker->randomLetter,
            'orthoName'      => $this->faker->randomLetter,
            'phoneticNotes'  => $this->faker->paragraph,
            'orthoNotes'     => $this->faker->paragraph,
            'privateNotes'   => $this->faker->paragraph,
            'isMarginal'     => $this->faker->boolean,
            'isArchiphoneme' => $this->faker->boolean,
            'featurable_type' => isset($type)
                                    ? $type
                                    : $this->faker->randomElement(['vowelTypes', 'consonantTypes', 'clusterTypes'])
        ];

        switch ($data['featurable_type']) {
            case 'vowelTypes':
                $data['featurable_id'] = factory(VowelType::class)->create()->id;
                break;
        }

        if ($data['isArchiphoneme']) {
            $data['archiphonemeDescription'] = $this->faker->sentence;
        }

        return $data;
    }
}
