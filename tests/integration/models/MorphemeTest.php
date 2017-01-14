<?php

use App\Slot;
use App\Gloss;
use App\Language;
use App\Morpheme;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MorphemeTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_morpheme_has_a_name()
	{
		$morpheme = new Morpheme(['name' => 'tst']);

		$this->assertEquals('tst', $morpheme->name);
	}

	/** @test */
	function a_morpheme_has_a_language()
	{
		$language = factory(Language::class)->create();

		$morpheme = new Morpheme(['language_id' => $language->id]);

		$this->assertEquals($language->id, $morpheme->language_id);
	}

	/** @test */
	function a_morpheme_has_a_gloss()
	{
		$gloss = factory(Gloss::class)->create();

		$morpheme = new Morpheme(['gloss_id' => $gloss->id]);		

		$this->assertEquals($gloss->id, $morpheme->gloss_id);
	}

	/** @test */
	function a_morpheme_has_a_slot()
	{
		$slot = factory(Slot::class)->create();

		$morpheme = new Morpheme(['slot_id' => $slot->id]);	

		$this->assertEquals($slot->id, $morpheme->slot_id);	
	}

	/** @test */
	function a_morpheme_has_allomorphy_notes()
	{
		$morpheme = new Morpheme(['allomorphyNotes' => 'These are the allomorphy notes']);

		$this->assertEquals('These are the allomorphy notes', $morpheme->allomorphyNotes);
	}

	/** @test */
	function a_morpheme_has_historical_notes()
	{
		$morpheme = new Morpheme(['historicalNotes' => 'These are the historical notes']);

		$this->assertEquals('These are the historical notes', $morpheme->historicalNotes);
	}

	/** @test */
	function a_morpheme_has_comments()
	{
		$morpheme = new Morpheme(['comments' => 'These are the private comments']);

		$this->assertEquals('These are the private comments', $morpheme->comments);
	}

	/** @test */
	function a_morpheme_saves()
	{
		Slot::create(['name' => 'V', 'abv' => 'V']);
		Gloss::create(['name' => 'V', 'abv' => 'V']);

		$morpheme = factory(Morpheme::class)->create();

		$this->assertGreaterThan(0, $morpheme->id);
	}
}