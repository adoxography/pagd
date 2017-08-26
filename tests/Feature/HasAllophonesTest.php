<?php

use Algling\Phonology\Models\Allophone;
use Algling\Phonology\Models\Phoneme;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Venturecraft\Revisionable\Revision;

class HasAllophonesTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_phoneme_generates_a_default_allophone()
    {
        $phoneme = factory(Phoneme::class)->create();

        $this->assertCount(1, Allophone::where('phoneme_id', $phoneme->id)->get());
    }

    /** @test */
    public function a_phonemes_default_allophone_is_its_ipa_name()
    {
        $phoneme = factory(Phoneme::class)->create([
            'ipaName' => 'a'
        ]);

        $this->assertEquals(
            '[a]',
            Phoneme::with('allophones')->where('id', $phoneme->id)->first()->allophones->first()->name
        );
    }

    /** @test */
    public function a_phonemes_default_allophone_is_its_algo_name_when_there_is_no_ipa_name()
    {
        $phoneme = factory(Phoneme::class)->create([
            'ipaName' => null,
            'algoName' => 'a'
        ]);

        $this->assertEquals(
            '[a]',
            Phoneme::with('allophones')->where('id', $phoneme->id)->first()->allophones->first()->name
        );
    }

    /** @test */
    public function a_phoneme_can_be_saved_with_allophones()
    {
        $phonemeData = factory(Phoneme::class)->raw();
        $phonemeData['allophones'] = [
            ['name' => 'a'],
            ['name' => 'b']
        ];

        $phoneme = Phoneme::create($phonemeData);

        $this->assertCount(2, $phoneme->allophones()->get());
        $this->assertEquals('[a]', $phoneme->allophones()->first()->name);
    }

    /** @test */
    public function a_phoneme_can_be_updated_with_allophones()
    {
        $phoneme = factory(Phoneme::class)->create();
        $phoneme->update(['allophones' => factory(Allophone::class, 2)->raw()]);

        $this->assertCount(2, $phoneme->allophones()->get());
    }

    /** @test */
    public function changing_allophones_causes_a_revision_to_be_created()
    {
        $phoneme = factory(Phoneme::class)->create(['ipaName' => 'p']);

        $phoneme->update(['allophones' => [[
            'name' => 't',
            'environment' => 'sibilants'
        ]]]);

        $this->assertCount(1, Revision::where(['old_value' => '[p]', 'new_value' => '[t] / sibilants'])->get());
    }

    /** @test */
    public function constrained_allophones_are_saved_before_unconstrained_allophones()
    {
        $phoneme = factory(Phoneme::class)->create();

        $phoneme->update(['allophones' => [
            ['name' => 'a'],
            ['name' => 'b', 'environment' => 'something'],
            ['name' => 'c'],
            ['name' => 'd', 'environment' => 'something else']
        ]]);

        $allophones = $phoneme->allophones()->get();

        $this->assertEquals('[b]', $allophones[0]->name);
        $this->assertEquals('[d]', $allophones[1]->name);
        $this->assertEquals('[a]', $allophones[2]->name);
        $this->assertEquals('[c]', $allophones[3]->name);
    }
}
