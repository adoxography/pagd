<?php

use App\Models\Phonology\Phoneme;
use Algling\Verbals\Models\Form;
use App\Models\Words\Example;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HasPhonemesTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_phonemeable_connects_its_phonemes()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 't'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 't'
        ]);

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function phonemes_are_not_connected_when_the_phoneme_does_not_exist()
    {
        $form = factory(Form::class)->create([
            'phonemicForm' => 't'
        ]);

        $this->assertCount(0, $form->phonemes()->get());
    }

    /** @test */
    public function phonemes_are_only_added_once()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 't'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 'tt'
        ]);

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function phonemeables_do_not_crosstalk()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 't'
        ]);

        $form = Form::forceCreate(factory(Form::class)->raw([
            'id' => 5,
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 't'
        ]));

        $example = Example::forceCreate(factory(Example::class)->raw([
            'id' => 5,
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 't'
        ]));

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function diacritics_are_connected_with_phonemes()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 'ǽ'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 'ǽ'
        ]);

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function updating_a_phonemeable_with_no_phonemic_form_removes_its_phonemes()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 't'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 't'
        ]);

        $form->update(['phonemicForm' => '']);

        $this->assertCount(0, $form->phonemes()->get());
    }

    /** @test */
    public function adding_a_phoneme_will_update_existing_phonemeables()
    {
        $form = factory(Form::class)->create([
            'phonemicForm' => 't'
        ]);

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $form->language_id,
            'algoName' => 't'
        ]);

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function adding_a_phoneme_will_update_existing_phonemeables_when_it_contains_a_diacritic()
    {
        $form = factory(Form::class)->create([
            'phonemicForm' => 'ǽ'
        ]);

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $form->language_id,
            'algoName' => 'ǽ'
        ]);

        $this->assertCount(1, $form->phonemes()->get());
    }

    /** @test */
    public function adding_a_phoneme_will_update_existing_phonemeables_when_the_phonemic_form_is_large()
    {
        $form = factory(Form::class)->create([
            'phonemicForm' => 'ptk'
        ]);

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $form->language_id,
            'algoName' => 'p'
        ]);

        $this->assertCount(1, $form->phonemes()->get());

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $form->language_id,
            'algoName' => 't'
        ]);

        $this->assertCount(2, $form->phonemes()->get());

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $form->language_id,
            'algoName' => 'k'
        ]);

        $this->assertCount(3, $form->phonemes()->get());
    }
}
