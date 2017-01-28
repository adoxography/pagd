<?php

use App\Group;
use App\Language;
use App\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LanguageTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_language_has_a_name()
	{
		$language = new Language(['name' => 'Test Name']);

		$this->assertEquals('Test Name', $language->name);
	}

	/** @test */
	function a_language_has_a_group()
	{
		$group = factory(Group::class)->create();

		$language = new Language(['group_id' => $group->id,]);

		$this->assertEquals($group->id, $language->group_id);
	}

	/** @test */
	function a_language_has_an_ISO()
	{
		$language = new Language(['iso' => 'tst',]);

		$this->assertEquals('tst', $language->iso);
	}

	/** @test */
	function a_language_has_an_algonquianist_code()
	{
		$language = new Language(['algoCode' => 'test1']);

		$this->assertEquals('test1', $language->algoCode);
	}

	/** @test */
	function a_language_saves()
	{
		$language = factory(Language::class)->create();

		$this->assertGreaterThan(0, $language->id);
	}

	/** @test */
	function a_language_has_a_parent()
	{
		$parent = factory(Language::class)->create();

		$language = new Language(['parent_id' => $parent->id]);

		$this->assertEquals($parent->id, $language->parent_id);
	}

	/** @test */
	function a_language_generates_a_vStem_when_created()
	{
		$language = factory(Language::class)->create();
		$vStem = $language->morphemes[0];

		$this->assertEquals('V', $vStem->name);
	}

	/** @test */
	function a_language_fetches_its_morphemes()
	{
		$language = factory(Language::class)->create();

		factory(Morpheme::class, 5)->create([
			'language_id' => $language->id
		]);

		$this->assertCount(6, $language->morphemes); // +1 for the vStem
	}
}