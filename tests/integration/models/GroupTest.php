<?php

use App\Group;
use App\Models\Language;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GroupTest extends TestCase
{
    use DatabaseTransactions;

    protected $connectionsToTransact = ['sqlite'];

    /** @test */
    public function a_group_has_a_name()
    {
        $group = new Group(['name' => 'TestGroup']);

        $this->assertEquals('TestGroup', $group->name);
    }

    /** @test */
    public function a_group_saves()
    {
        $group = new Group([
            'name' => 'TestGroup',
            'description' => 'This is the description'
        ]);

        $group->save();

        $this->assertGreaterThan(0, $group->id);
    }

    public function a_group_starts_with_no_languages()
    {
        $group = factory(Group::class)->create();

        $this->assertCount(0, $group->languages);
    }

    public function a_group_has_languages()
    {
        $group = factory(Group::class)->create();
        $language = factory(Language::class)->create();

        $language->group_id = $group->id;

        $this->assertCount(1, $group->languages);
        $this->assertEquals($group->name, $language->group->name);
        $this->assertEquals($group->languages->first()->name, $language->name);
    }
}
