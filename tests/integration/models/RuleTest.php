<?php

use App\Rule;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RuleTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function a_rule_has_a_type()
    {
        $rule = factory(Rule::class)->create([
            'type_id' => 1
        ]);

        $this->assertNotNull($rule->type);
    }
}
