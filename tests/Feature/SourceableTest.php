<?php

use Algling\Verbals\Models\Form;
use App\Group;
use App\Models\Morphology\Morpheme;
use App\Source;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SourceableTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function sources_can_be_saved_to_sourceables()
    {
        $source = factory(Source::class)->create();
        $morpheme = factory(Morpheme::class)->create();

        $morpheme->connectSource($source);

        $this->assertCount(1, $morpheme->sources()->get());
    }

    /** @test */
    public function multiple_sources_can_be_saved_to_sourceables()
    {
        $source = factory(Source::class, 1)->create();
        $morpheme = factory(Morpheme::class)->create();

        $morpheme->connectSources($source);

        $this->assertCount(1, $morpheme->sources()->get());
    }

    /** @test */
    public function sources_can_be_added_as_arrays()
    {
        $source = factory(Source::class)->create()->toArray();
        $morpheme = factory(Morpheme::class)->create();

        $morpheme->connectSource($source);

        $this->assertCount(1, $morpheme->sources()->get());
    }

    /** @test */
    public function sources_can_be_synchronized_in_sourceables()
    {
        $sources = factory(Source::class, 2)->create();
        $morpheme = factory(Morpheme::class)->create();

        $morpheme->connectSources($sources);

        $newSources = factory(Source::class, 1)->create();

        $morpheme->syncSources($newSources);

        $this->assertEquals($newSources->first()->id, $morpheme->sources()->first()->id);
    }

    /** @test */
    public function sources_can_be_saved_concurrently_with_sourceable_creation()
    {
        $source = factory(Source::class, 1)->create()->toArray();
        $groupData = factory(Group::class)->raw();

        // Group::unguard();
        $groupData['sources'] = $source;
        $group = Group::create($groupData);

        $this->assertCount(1, $group->sources()->get());
    }

    /** @test */
    public function sourceables_can_be_saved_without_sources()
    {
        $group = factory(Group::class)->create();

        $this->assertCount(0, $group->sources()->get());
    }

    /** @test */
    public function sources_can_be_saved_concurrently_with_sourceable_update()
    {
        $morpheme = factory(Morpheme::class)->create();

        $morpheme->update(['sources' => factory(Source::class, 2)->create()->toArray()]);

        $this->assertCount(2, $morpheme->sources()->get());
    }

    /** @test */
    public function updating_a_sourceable_with_an_empty_source_array_deletes_all_sources()
    {
        $groupData = factory(Group::class)->raw();
        $groupData['sources'] = factory(Source::class, 2)->create()->toArray();

        $group = Group::create($groupData);

        $this->assertCount(2, $group->sources()->get());

        $group->update(['sources' => []]);

        $this->assertCount(0, $group->sources()->get());
    }

    /** @test */
    public function concurrently_saved_sources_replace_old_sources()
    {
        $source1 = factory(Source::class)->create()->toArray();
        $source2 = factory(Source::class)->create()->toArray();
        $groupData = factory(Group::class)->raw();

        $groupData['sources'] = factory(Source::class, 2)->create()->toArray();

        $group = Group::create($groupData);

        $newSources = factory(Source::class, 1)->create();

        $group->update(['sources' => $newSources->toArray()]);

        $this->assertCount(1, $group->sources()->get());
        $this->assertEquals($newSources->first()->id, $group->sources()->first()->id);
    }

    /** @test */
    public function sources_are_only_connected_to_the_initial_model_on_create()
    {
        $morpheme = factory(Morpheme::class)->create(['name' => 'test-']);
        $formData = factory(Form::class)->raw([
            'name' => 'test-V'
        ]);
        $formData['sources'] = factory(Source::class, 2)->create()->toArray();

        $form = Form::create($formData);

        $this->assertCount(2, $form->sources()->get());
        $this->assertCount(0, $morpheme->sources()->get());
    }

    /** @test */
    public function sources_are_only_connected_to_the_initial_model_on_update()
    {
        $sources = factory(Source::class, 2)->create();

        $morphemeData = factory(Morpheme::class)->raw(['name' => 'test-']);
        $morphemeData['sources'] = $sources->toArray();
        $morpheme = Morpheme::create($morphemeData);

        $this->assertCount(2, $morpheme->sources()->get());

        $formData = factory(Form::class)->raw(['name' => 'test-V']);
        $formData['sources'] = $sources->toArray();
        $form = Form::create($formData);

        $this->assertCount(2, $form->sources()->get());

        $form->update(['sources' => []]);

        $this->assertCount(0, $form->sources()->get());
        $this->assertCount(2, $morpheme->sources()->get());
    }
}
