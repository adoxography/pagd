<?php

use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\Reflex;
use App\Language;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class PAParentTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();

        $this->pa = Language::find(1);
        $this->child = factory(Language::class)->create([
            'parent_id' => $this->pa->id
        ]);

        $this->paPhoneme = factory(Phoneme::class)->create([
            'language_id' => $this->pa->id
        ]);
    }

    /** @test */
    public function phonemes_connect_to_pa_directly()
    {
        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $this->child->id
        ]);

        Reflex::create([
            'parent_id' => $this->paPhoneme->id,
            'language_id' => $phoneme->language_id,
            'reflex_id' => $phoneme->id
        ]);

        $this->assertEquals($this->paPhoneme->id, $phoneme->paParents()->first()->id);
    }

    /** @test */
    public function phonemes_connect_to_pa_remotely()
    {
        $secondChild = factory(Language::class)->create(['parent_id' => $this->child->id]);

        $phoneme1 = factory(Phoneme::class)->create([
            'language_id' => $this->child->id
        ]);

        $phoneme2 = factory(Phoneme::class)->create([
            'language_id' => $secondChild->id
        ]);

        Reflex::create([
            'parent_id' => $this->paPhoneme->id,
            'language_id' => $phoneme1->language_id,
            'reflex_id' => $phoneme1->id
        ]);

        Reflex::create([
            'parent_id' => $phoneme1->id,
            'language_id' => $phoneme2->language_id,
            'reflex_id' => $phoneme2->id
        ]);

        $this->assertEquals($this->paPhoneme->id, $phoneme2->paParents()->first()->id);
    }

    /** @test */
    public function phonemes_do_not_connect_when_they_arent_related_to_pa()
    {
        $phoneme1 = factory(Phoneme::class)->create();
        $phoneme2 = factory(Phoneme::class)->create();

        Reflex::create([
            'parent_id' => $phoneme1->id,
            'language_id' => $phoneme2->language_id,
            'reflex_id' => $phoneme2->id
        ]);

        $this->assertCount(0, $phoneme2->paParents()->get());
    }

    /** @test */
    function reflexes_can_be_null()
    {
        Reflex::create([
            'parent_id' => $this->paPhoneme->id,
            'language_id' => $this->child->id,
            'reflex_id' => null
        ]);

        $this->assertCount()
    }

    /** @test */
    public function phonemes_connect_to_multiple_pa_phonemes()
    {
        $paPhoneme2 = factory(Phoneme::class)->create(['language_id' => $this->pa->id]);

        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $this->child->id
        ]);

        Reflex::create([
            'parent_id' => $this->paPhoneme->id,
            'language_id' => $phoneme->language_id,
            'reflex_id' => $phoneme->id
        ]);

        Reflex::create([
            'parent_id' => $paPhoneme2->id,
            'language_id' => $phoneme->language_id,
            'reflex_id' => $phoneme->id
        ]);

        $this->assertCount(2, $phoneme->paParents()->get());
    }

    /** @test */
    public function languages_can_be_retrieved_from_pivot_tables()
    {
        $phoneme = factory(Phoneme::class)->create([
            'language_id' => $this->child->id
        ]);

        Reflex::create([
            'parent_id' => $this->paPhoneme->id,
            'language_id' => $phoneme->language_id,
            'reflex_id' => $phoneme->id
        ]);

        $this->assertInstanceOf(Language::class, $phoneme->paParents()->first()->pivot->language);
    }
}
