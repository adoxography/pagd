<?php

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
