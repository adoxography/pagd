<?php

use Algling\Phonology\Models\Reflex;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ReflexTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_it_deletes()
    {
        $reflex = factory(Reflex::class)->create();
        $parent = $reflex->parent;

        $this->assertCount(1, $parent->reflexes()->get());

        $reflex->delete();

        // $this->assertNotNull($reflex->deleted_at);
        $this->assertCount(0, $parent->reflexes()->get());
    }
}
