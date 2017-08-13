<?php

use App\Source;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SourceTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['sqlite'];

	/** @test */
	function a_source_has_attributes()
	{
		$source = Source::create([
			'author' => 'Goddard, I.',
			'year' => 2000,
			'long' => 'A long string of text with periods. and hyphens- and so an and so forth',
			'url' => 'http://www.algling.net',
			'summary' => 'This is a summary of this paper',
			'notes' => 'These are some notes about this source'
		]);

		$this->assertEquals('Goddard, I.', $source->author);
		$this->assertEquals(2000, $source->year);
		$this->assertEquals('A long string of text with periods. and hyphens- and so an and so forth', $source->long);
		$this->assertEquals('http://www.algling.net', $source->url);
		$this->assertEquals('This is a summary of this paper', $source->summary);
		$this->assertEquals('These are some notes about this source', $source->notes);
	}
}