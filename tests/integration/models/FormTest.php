<?php

use App\Form;
use App\FormType;
use App\Language;
use App\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class FormTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_form_has_a_surface_form()
	{
		$form = new Form(['surfaceForm' => 'testform']);

		$this->assertEquals('testform', $form->surfaceForm);
	}

	/** @test */
	function a_form_has_a_phonetic_form()
	{
		$form = new Form(['phoneticForm' => '[ɑæəɛɪŋɾʃ]']);

		$this->assertEquals('[ɑæəɛɪŋɾʃ]', $form->phoneticForm);
	}	

	/** @test */
	function a_form_has_a_morphemic_form()
	{
		$form = new Form(['morphemicForm' => 'a-b-c']);

		$this->assertEquals('a-b-c', $form->morphemicForm);
	}

	/** @test */
	function a_form_has_a_language()
	{
		$language = factory(Language::class)->create();

		$form = new Form(['language_id' => $language->id]);

		$this->assertEquals($language->id, $form->language_id);
	}

	/** @test */
	function a_form_has_a_type()
	{
		$type = factory(FormType::class)->create();

		$form = new Form(['formType_id' => $type->id]);

		$this->assertEquals($type->id, $form->formType_id);
	}

	/** @test */
	function a_form_fetches_its_morphemes()
	{
		// Create a dummy language to ensure all forms and morphemes are of the same language
		$language = factory(Language::class)->create();

		// Add the morphemes to the language
		factory(Morpheme::class)->create([
			'name' => 'a',
			'language_id' => $language->id
		]);		
		factory(Morpheme::class)->create([
			'name' => 'b',
			'language_id' => $language->id
		]);		

		// Create the form
		$form = factory(Form::class)->create([
			'language_id'   => $language->id,
			'morphemicForm' => 'a-b-V'
		]);

		$this->assertGreaterThan(0, $form->id); // Make sure the form persisted to the database
		$this->assertCount(3, $form->morphemes); // +1 for the Vstem
		$this->assertEquals($form->morphemes[0]->name.'-'.$form->morphemes[1]->name.'-'.$form->morphemes[2]->name, $form->morphemicForm); // 'a-b-V'
	}


}