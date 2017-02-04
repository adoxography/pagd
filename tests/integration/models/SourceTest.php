<?php

use App\Source;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SourceTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_source_has_attributes()
	{
		$source = Source::create([
			'short' => 'Goddard 2000',
			'long' => 'A long string of text with periods. and hyphens- and so an and so forth',
			'url' => 'http://www.algling.net',
			'notes' => 'These are some notes about this source'
		]);

		$this->assertEquals('Goddard 2000', $source->short);
		$this->assertEquals('A long string of text with periods. and hyphens- and so an and so forth', $source->long);
		$this->assertEquals('http://www.algling.net', $source->url);
		$this->assertEquals('These are some notes about this source', $source->notes);
	}
}