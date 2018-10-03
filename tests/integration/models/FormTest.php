<?php

use App\Source;
use App\Models\Language;
use App\Models\Verbs\Form;
use App\Models\Verbs\Structure;
use App\Models\Morphology\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class FormTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_form_has_attributes()
    {
        // Get prerequisites ready
        $language = factory(Language::class)->create();
        $type = factory(Structure::class)->create();
        $parent = factory(Form::class)->create();

        // Create the form
        $form = Form::create([
            'name' => 'testform',
            'phonemicForm' => '[ɑæəɛɪŋɾʃ]',
            'morphemicForm' => 'a-b-c',
            'language_id' => $language->id,
            'structure_id' => $type->id,
            'structure_type' => Structure::class,
            'parent_id' => $parent->id,
            'historicalNotes' => "These are the historical notes",
            'allomorphyNotes' => "These are the allomorphy notes",
            'usageNotes' => "These are the usage notes",
            'privateNotes' => "These are the comments",
        ]);

        // Run the tests
        $this->assertNotNull($form->id);
        $this->assertEquals('testform', $form->name);
        $this->assertEquals('[ɑæəɛɪŋɾʃ]', $form->phonemicForm);
        $this->assertEquals('a-b-c', $form->morphemicForm);
        $this->assertEquals($language->id, $form->language_id);
        $this->assertEquals($type->id, $form->structure_id);
        $this->assertEquals(Structure::class, $form->structure_type);
        $this->assertEquals("These are the historical notes", $form->historicalNotes);
        $this->assertEquals("These are the allomorphy notes", $form->allomorphyNotes);
        $this->assertEquals("These are the usage notes", $form->usageNotes);
        $this->assertEquals("These are the comments", $form->privateNotes);
    }

    /** @test */
    public function a_form_fetches_its_morphemes()
    {
        // Create a dummy language to ensure all forms and morphemes are of the same language
        $language = factory(Language::class)->create();

        // Add the morphemes to the language
        factory(Morpheme::class)->create([
            'name' => 'a-',
            'language_id' => $language->id
        ]);
        factory(Morpheme::class)->create([
            'name' => 'b-',
            'language_id' => $language->id
        ]);

        // Create the form
        $form = factory(Form::class)->create([
            'language_id'   => $language->id,
            'morphemicForm' => 'a-b-V'
        ]);

        $this->assertCount(3, $form->morphemes); // +1 for the Vstem
        $this->assertEquals($form->morphemes[0]->name.$form->morphemes[1]->name.$form->morphemes[2]->name, $form->morphemicForm . '-'); // 'a-b-V'
    }

    /** @test */
    public function a_reconstructed_form_has_an_asterisk()
    {
        // Create a reconstructed language
        $language = factory(Language::class)->create([
            'reconstructed' => 1
        ]);

        // Add a form to it
        $form = factory(Form::class)->create([
            'language_id' => $language->id,
            'name' => 'V-test'
        ]);

        $this->assertEquals('*V-test', $form->name);
    }

    /** @test */
    public function a_form_can_have_sources()
    {
        $source = factory(Source::class)->create();
        $form = factory(Form::class)->create();

        $sourceData = [['id' => $source->id, 'extraInfo' => 'page 7']];
        $form->connectSources($sourceData);

        $this->assertCount(1, $form->sources);
        $this->assertEquals($source->id, $form->sources->first()->id);
        $this->assertEquals('page 7', $form->sources->first()->pivot->extraInfo);
    }
}
