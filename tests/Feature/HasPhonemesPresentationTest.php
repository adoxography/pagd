<?php

use Algling\Phonology\Models\Phoneme;
use Algling\Verbals\Models\Form;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HasPhonemesPresentationTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function phonemic_forms_render_normally_if_no_phonemes_are_connected()
    {
        $form = factory(Form::class)->create(['phonemicForm' => 'V-t']);

        $this->assertEquals('V<i>-</i><i>t</i>', $form->present('phonemicForm')->__toString());
    }

    /** @test */
    public function characters_are_hyperlinked_if_a_phoneme_exists()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 't'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 't'
        ]);

        $this->assertRegExp('`<i><a.*>t</a></i>`', $form->present('phonemicForm')->__toString());
    }

    /** @test */
    public function phonemes_with_diacritics_display_properly()
    {
        $phoneme = factory(Phoneme::class)->create([
            'algoName' => 'ǽ'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $phoneme->language_id,
            'phonemicForm' => 'ǽ'
        ]);

        $this->assertRegExp('`<i><a.*>ǽ</a></i>`', $form->present('phonemicForm')->__toString());
    }
}
