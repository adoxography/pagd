<?php

use Adoxography\VerbalExpressions\EndOfExpressionException;
use Adoxography\VerbalExpressions\Expression;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class VerbalExpressionTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp()
    {
        parent::setUp();

        $this->verEx = verEx();
    }

    /** @test */
    public function it_finds_provided_text()
    {
        $this->verEx->find('test');

        $this->assertEquals('test', $this->verEx->test('test'));
    }

    /** @test */
    public function it_find_provided_text_anywhere()
    {
        $this->verEx->find('test');

        $this->assertEquals('test', $this->verEx->test('somethingtestsomething'));
    }

    /** @test */
    public function it_can_find_strings_after_earlier_strings()
    {
        $this->verEx->find('test')->then('another');

        $this->assertEquals('testanother', $this->verEx->test('testanother'));
    }

    /** @test */
    public function it_can_start_at_the_beginning_of_a_line()
    {
        $this->verEx->startOfLine()->find("test");
        $this->assertFalse($this->verEx->test("atest"));
    }

    /** @test */
    public function it_can_end_a_line()
    {
        $this->verEx->find("test")->endOfLine();
        $this->assertFalse($this->verEx->test("testa"));
    }

    /** @test */
    public function it_cannot_be_added_to_after_the_end_of_a_line()
    {
        $this->verEx->endOfLine();

        $this->expectException(EndOfExpressionException::class);

        $this->verEx->then("test");
    }

    /** @test */
    public function it_can_add_optional_rules()
    {
        $this->verEx->find('test')->maybe('another');

        $this->assertEquals('test', $this->verEx->test('testa'));
        $this->assertEquals('testanother', $this->verEx->test('testanother'));
    }

    /** @test */
    public function it_can_add_anything_rules()
    {
        $this->verEx->find('test')->anything();

        $this->assertEquals('testa', $this->verEx->test('testa'));
    }

    /** @test */
    public function it_can_add_anything_but_rules()
    {
        $this->verEx->find('test')->anythingBut('a');

        $this->assertFalse($this->verEx->test('testa'));
        $this->assertEquals('testb', $this->verEx->test('testb'));
    }

    /** @test */
    public function it_can_find_one_of_a_list()
    {
        $this->verEx->oneOf(['a','b','c']);

        $this->assertEquals('a', $this->verEx->test('a'));
        $this->assertEquals('b', $this->verEx->test('b'));
        $this->assertEquals('c', $this->verEx->test('c'));
    }

    /** @test */
    public function it_can_use_other_verbal_expressions_as_parameters()
    {
        $ve1 = new Expression;
        $ve2 = new Expression;
        $ve3 = new Expression;
        $ve4 = new Expression;

        $ve1->startOfLine();
        $ve2->find('a');
        $ve3->maybe('b');
        $ve4->find('c');

        $this->verEx->find($ve1)->then($ve2)->then($ve3)->oneOf([$ve2, $ve4]);

        $this->assertEquals('/^ab?(?:a|c)/', $this->verEx->getPattern());
    }

    /** @test */
    public function lookup_test()
    {
        $persons = verEx()->oneOf(['1st', '2nd', '3rd', '1', '2', '3\'\'', '3\'', '3', 'first', 'second', 'third', '0', 'X'], true)
                          ->maybe(' person');

        $numbers = verEx()->maybe(' ')
                          ->oneOf([
                            verEx()->oneOf(['singular', 'dual', 'plural']),
                            verEx()->oneOf(['sg', 'du', 'pl', 's', 'd', 'p'])
                          ], true);

        $animacies = verEx(' ')->oneOf(['inanimate', 'animate'], true);

        $obviatives = verEx(' ')->oneOf(['double obviative', 'obviative', 'obv'], true);

        $feature = verEx($persons)->maybe($numbers)
                                  ->maybe($animacies)
                                  ->maybe($obviatives);

        $structure = verEx($feature)->maybe(verEx('-')->then($feature))->maybe(verEx('\+')->then($feature));

        $this->assertEquals('third person animate double obviative', $feature->test('third person animate double obviative ta conjunct indicative'));
        $this->assertEquals('animate', $feature->match('third person animate double obviative ta conjunct indicative')[3]);

        $this->assertEquals('3s-0+X', $structure->test('3s-0+X'));
    }
}
