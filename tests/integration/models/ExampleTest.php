<?php

use App\Models\Words\Example;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function an_example_has_a_language()
    {
        $example = factory(Example::class)->create();

        $this->assertNotNull($example->language_id);
    }
}
