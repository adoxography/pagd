<?php

use Algling\Phonology\Models\Allophone;
use Algling\Phonology\Models\Phoneme;
use App\Language;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PhonemeTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_phoneme_has_a_language()
    {
        $language = factory(Language::class)->create();
        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]);

        $this->assertEquals($language->id, $phoneme->language_id);
    }

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
    public function a_phoneme_cascades_when_its_language_is_deleted()
    {
        $language = factory(Language::class)->create();
        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]);

        $language->forceDelete();

        $this->assertCount(0, Phoneme::where('id', $phoneme->id)->get());
    }
}
