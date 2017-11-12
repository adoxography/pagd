<?php

use Algling\Phonology\Models\Phoneme;
use App\Models\Morphology\Morpheme;
use App\Source;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SourceTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_source_has_attributes()
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

    /** @test */
    public function a_source_generate_its_name()
    {
        $source = factory(Source::class)->create([
            'author' => 'Fred',
            'year' => '2017'
        ]);

        $this->assertEquals('Fred 2017', $source->name);
    }

    /** @test */
    public function a_unique_source_has_no_disambiguator()
    {
        $source = factory(Source::class)->create();

        $this->assertNull($source->disambiguator);
    }

    /** @test */
    public function a_source_disambiguates()
    {
        factory(Source::class, 2)->create([
            'author' => 'Fred',
            'year' => '2017'
        ]);

        $sources = Source::where('author', 'Fred')->where('year', '2017')->get();

        $this->assertEquals('1', $sources[0]->disambiguator);
        $this->assertEquals('2', $sources[1]->disambiguator);
    }

    /** @test */
    public function a_source_matches_its_disambiguator_to_a_letter()
    {
        $sources = factory(Source::class, 4)->create([
            'author' => 'Fred',
            'year' => '2017'
        ]);

        $this->assertEquals('d', $sources->last()->letter);
    }

    /** @test */
    public function a_source_adds_its_letter_to_its_name()
    {
        $sources = factory(Source::class, 3)->create([
            'author' => 'Fred',
            'year' => '2017'
        ]);

        $this->assertEquals('Fred 2017c', $sources->last()->name);
    }

    /** @test */
    public function old_sources_are_removed_before_adding_new_ones()
    {
        $sources = [
            ['id' => factory(Source::class)->create()->id]
        ];

        $phoneme = factory(Phoneme::class)->create(['sources' => $sources]);
        $phoneme->syncSources($sources);

        $this->assertCount(1, $phoneme->sources()->get());
    }

    /** @test */
    public function sources_do_not_crosstalk()
    {
        $sources = [
            ['id' => factory(Source::class)->create()->id]
        ];

        $phonemeData = factory(Phoneme::class)->raw(['id' => 1000]);
        $morphemeData  = factory(Morpheme::class)->raw(['id' => 1000]);

        $phoneme = Phoneme::forceCreate($phonemeData + ['sources' => $sources]);
        $morpheme  = Morpheme::forceCreate($morphemeData + ['sources' => $sources]);

        $this->assertCount(1, $phoneme->sources()->get());
    }
}
