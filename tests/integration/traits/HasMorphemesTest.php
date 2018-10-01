<?php

use Algling\Verbals\Models\Form;
use App\Models\Words\Example;
use App\Language;
use App\Models\Morphology\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HasMorphemesTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function morphemes_do_not_have_to_be_added()
    {
        $form = factory(Form::class)->create([
            'morphemicForm' => ''
        ]);

        $this->assertCount(0, $form->morphemes()->get());
    }

    /** @test */
    public function an_existing_morpheme_can_be_linked()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name'        => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language->id,
            'morphemicForm' => 'test-V'
        ]);

        $this->assertCount(2, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function a_non_existing_morpheme_can_be_linked()
    {
        $form = factory(Form::class)->create([
            'morphemicForm' => 'test-V'
        ]);

        $this->assertCount(1, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function an_ambiguous_morpheme_can_be_linked()
    {
        $language = factory(Language::class)->create();

        factory(Morpheme::class, 2)->create([
            'language_id' => $language->id,
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $language->id,
            'morphemicForm' => 'test-V'
        ]);

        $this->assertCount(1, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function a_disambiguated_morpheme_can_be_linked()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test.1-V'
        ]);

        $this->assertCount(2, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function a_morpheme_can_be_added_twice()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-test-V'
        ]);

        $this->assertCount(3, $form->morphemes()->get());
    }

    /** @test */
    public function an_optional_morpheme_can_be_added()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => '(test)-V'
        ]);

        $this->assertCount(2, $form->morphemes()->get());
    }

    /** @test */
    public function morphemes_with_optional_phonemes_are_recognized_as_different_morphemes()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => '(t)est-V'
        ]);

        $this->assertCount(1, $form->morphemes()->get());
    }

    /** @test */
    public function a_morpheme_with_a_hyphen_on_the_left_can_be_linked()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => '-test'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V-test'
        ]);

        $this->assertCount(3, $form->morphemes()->get());
    }

    /** @test */
    public function a_morpheme_with_a_hyphen_on_the_right_can_be_linked()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V-test'
        ]);

        $this->assertCount(3, $form->morphemes()->get());
    }

    /** @test */
    public function a_morpheme_with_a_hyphen_on_both_sides_can_be_linked()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => '-test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V-test'
        ]);

        $this->assertCount(3, $form->morphemes()->get());
    }

    /** @test */
    public function a_morpheme_can_become_ambiguous()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V'
        ]);

        factory(Morpheme::class)->create([
            'name' => 'test-',
            'language_id' => $morpheme->language_id
        ]);

        $this->assertCount(1, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function a_disambiguated_morpheme_does_not_become_ambiguous()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test.1-V'
        ]);

        factory(Morpheme::class)->create([
            'name' => 'test-',
            'language_id' => $morpheme->language_id
        ]);

        $this->assertCount(2, $form->morphemes()->get());
        $this->assertCount(2, json_decode($form->morphemesToJson()));
    }

    /** @test */
    public function a_model_can_disambiguate_its_morphemes()
    {
        $language = factory(Language::class)->create();

        factory(Morpheme::class, 2)->create([
            'name' => 'test-',
            'language_id' => $language->id
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $language->id,
            'morphemicForm' => 'test-V'
        ]);

        $form->disambiguate(0, 1);

        $this->assertCount(2, $form->morphemes()->get());
    }

    /** @test */
    public function if_not_all_morphemes_are_present_the_model_is_marked_as_incomplete()
    {
        $form = factory(Form::class)->create([
            'morphemicForm' => 'test-V'
        ]);

        $this->assertEquals(0, Form::find($form->id)->complete);
    }

    /** @test */
    public function if_all_morphemes_are_present_the_model_is_marked_as_complete()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V'
        ]);

        $this->assertEquals(1, Form::find($form->id)->complete);
    }

    /** @test */
    public function if_some_morphemes_are_ambiguous_the_model_is_marked_as_incomplete()
    {
        $language = factory(Language::class)->create();

        factory(Morpheme::class, 2)->create([
            'name' => 'test-',
            'language_id' => $language->id
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $language->id,
            'morphemicForm' => 'test-V'
        ]);

        $this->assertEquals(0, Form::find($form->id)->complete);
    }

    /** @test */
    public function an_incomplete_model_is_marked_as_complete_when_completed()
    {
        $form = factory(Form::class)->create([
            'morphemicForm' => 'test-V'
        ]);

        $morpheme = factory(Morpheme::class)->create([
            'language_id' => $form->language_id,
            'name' => 'test-'
        ]);

        $this->assertEquals(1, Form::find($form->id)->complete);
    }

    /** @test */
    public function a_complete_model_is_marked_as_incomplete_when_a_morpheme_is_deleted()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V'
        ]);

        $morpheme->delete();

        $this->assertEquals(0, Form::find($form->id)->complete);
    }

    /** @test */
    public function a_complete_model_is_marked_as_incomplete_when_a_morpheme_becomes_ambiguous()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $morpheme->language_id,
            'morphemicForm' => 'test-V'
        ]);

        factory(Morpheme::class)->create([
            'language_id' => $morpheme->language_id,
            'name' => 'test-'
        ]);

        $this->assertEquals(0, Form::find($form->id)->complete);
    }

    /** @test */
    public function an_incomplete_model_is_marked_as_complete_when_a_morpheme_is_disambiguated()
    {
        $language = factory(Language::class)->create();

        factory(Morpheme::class, 2)->create([
            'name' => 'test-',
            'language_id' => $language->id
        ]);

        $form = factory(Form::class)->create([
            'language_id' => $language->id,
            'morphemicForm' => 'test-V'
        ]);

        $form->disambiguate(0, 1);

        $this->assertEquals(1, Form::find($form->id)->complete);
    }

    /** @test */
    public function morphemes_are_retained_without_crosstalk()
    {
        $morpheme = factory(Morpheme::class)->create([
            'name' => 'test-'
        ]);

        $formData = factory(Form::class)->raw([
            'id' => 1000,
            'morphemicForm' => 'test-V',
            'language_id' => $morpheme->language_id
        ]);

        $exampleData = factory(Example::class)->raw([
            'id' => 1000,
            'morphemicForm' => 'test-V',
            'language_id' => $morpheme->language_id
        ]);

        $form = Form::forceCreate($formData);
        $example = Example::forceCreate($exampleData);

        $this->assertCount(2, $form->morphemes()->get());
    }
}
