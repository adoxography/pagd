<?php

use App\Group;
use App\Source;
use App\Language;
use Algling\Words\Models\Form as WordForm;
use Algling\Verbals\Models\Form as VerbForm;
use App\Models\Morphology\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LanguageTest extends TestCase
{
    use DatabaseTransactions;

    protected $connectionsToTransact = ['sqlite'];

    /** @test */
    public function a_language_has_attributes()
    {
        $group = factory(Group::class)->create();
        $parent = factory(Language::class)->create();

        $language = Language::create([
            'name' => 'Test Name',
            'group_id' => $group->id,
            'iso' => 'tst',
            'algoCode' => 'test1',
            'parent_id' => $parent->id
        ]);

        $this->assertNotNull($language->id);
        $this->assertEquals('Test Name', $language->name);
        $this->assertEquals($group->id, $language->group_id);
        $this->assertEquals('tst', $language->iso);
        $this->assertEquals('test1', $language->algoCode);
        $this->assertEquals($parent->id, $language->parent_id);
    }

    /** @test */
    public function a_language_generates_a_vStem_when_created()
    {
        $language = factory(Language::class)->create();
        $vStem = $language->morphemes->where('name', 'V-');

        $this->assertNotNull($vStem);
    }

    /** @test */
    public function a_language_generates_a_nStem_when_created()
    {
        $language = factory(Language::class)->create();
        $nStem = $language->morphemes->where('name', 'N-');

        $this->assertNotNull($nStem);
    }

    /** @test */
    public function a_language_fetches_its_morphemes()
    {
        $language = factory(Language::class)->create();

        factory(Morpheme::class, 5)->create([
            'language_id' => $language->id
        ]);

        $this->assertCount(7, $language->morphemes); // +2 for the stems
    }

    /** @test */
    public function a_language_fetches_its_forms()
    {
        $language = factory(Language::class)->create();

        $forms = factory(WordForm::class, 5)->create([
            'language_id' => $language->id
        ]);

        $this->assertCount(5, $language->forms);
    }

    /** @test */
    public function a_language_fetches_its_verb_forms()
    {
        $language = factory(Language::class)->create();

        $forms = factory(VerbForm::class, 5)->create([
            'language_id' => $language->id
        ]);

        $this->assertCount(5, $language->forms);
    }

    /** @test */
    public function a_language_fetches_associated_sources()
    {
        $language = factory(Language::class)->create();

        $source1 = factory(Source::class)->create();
        $source2 = factory(Source::class)->create();
        $source3 = factory(Source::class)->create();

        $form = factory(WordForm::class)->create([
            'language_id' => $language->id
        ]);

        $morpheme = factory(Morpheme::class)->create([
            'language_id' => $language->id
        ]);

        $sourceData1 = [
            ['id' => $source1->id, 'extraInfo' => 'page 1'],
            ['id' => $source2->id, 'extraInfo' => 'chapter 6']
        ];

        $sourceData2 = [
            ['id' => $source1->id, 'extraInfo' => 'page 5'],
            ['id' => $source3->id, 'extraInfo' => 'chapter 9']
        ];

        $form->connectSources($sourceData1);
        $morpheme->connectSources($sourceData2);

        $sources = $language->sources();

        $this->assertCount(3, $sources);
    }
}
