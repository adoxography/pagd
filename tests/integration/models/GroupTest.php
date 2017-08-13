<?php

use App\Group;
use App\Language;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class GroupTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['sqlite'];

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

	function a_group_starts_with_no_languages()
	{
		$group = factory(Group::class)->create();

		$this->assertCount(0, $group->languages);
	}

	function a_group_has_languages()
	{
		$group = factory(Group::class)->create();
		$language = factory(Language::class)->create();

		$language->group_id = $group->id;

		$this->assertCount(1, $group->languages);
		$this->assertEquals($group->name, $language->group->name);
		$this->assertEquals($group->languages->first()->name, $language->name);
	}

	// /** @test */
	// function a_group_fetches_its_languages()
	// {
	// 	$group = factory(Group::class)->create();

	// 	for ($i=0; $i < 5; $i++) { 
	// 		factory(Language::class)->create(['group_id' => $group->id]);
	// 		var_dump($group->languages->pluck('name'));
	// 	}
	// 	// $languages = factory(Language::class, 5)->create([
	// 	// 	'group_id' => $group->id
	// 	// ]);

	// 	$this->assertCount(5, $group->languages);
	// }
}