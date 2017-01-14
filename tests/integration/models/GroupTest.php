<?php

use App\Group;
use App\Language;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GroupTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_group_has_a_name()
	{
		$group = new Group(['name' => 'TestGroup']);

		$this->assertEquals('TestGroup', $group->name);
	}

	/** @test */
	function a_group_has_a_description()
	{
		$group = new Group(['description' => 'This is the description']);

		$this->assertEquals('This is the description', $group->description);
	}

	/** @test */
	function a_group_saves()
	{
		$group = new Group([
			'name' => 'TestGroup',
			'description' => 'This is the description'
		]);

		$group->save();

		$this->assertGreaterThan(0, $group->id);
	}

	/** @test */
	function a_group_fetches_its_languages()
	{
		$group = factory(Group::class)->create();
		factory(Language::class, 5)->create([
			'group_id' => $group->id
		]);

		$this->assertCount(5, $group->languages);
	}
}