<?php

use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Reflex;
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
    // public function a_phoneme_cascades_when_its_language_is_deleted()
    // {
    //     $language = factory(Language::class)->create();
    //     $phoneme = factory(Phoneme::class)->create([
    //         'language_id' => $language->id
    //     ]);

    //     $language->forceDelete();

    //     $this->assertCount(0, Phoneme::where('id', $phoneme->id)->get());
    // }

    /** @test */
    public function associated_reflexes_are_deleted_on_delete()
    {
        $language = factory(Language::class)->create();

        $phoneme1 = factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]);
        $phoneme2 = factory(Phoneme::class)->create([
            'language_id' => $language->id
        ]);

        $reflex = factory(Reflex::class)->create([
            'parent_id' => $phoneme1->id,
            'reflex_id' => $phoneme2->id
        ]);

        $phoneme2->delete();

        $this->assertCount(0, $phoneme1->reflexes()->get());
    }
}
