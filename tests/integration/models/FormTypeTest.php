<?php

use App\Form;
use App\Mode;
use App\Order;
use App\Argument;
use App\FormType;
use App\FormClass;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class FormTypeTest extends TestCase
{
	use DatabaseTransactions;

	protected $connectionsToTransact = ['mysql_testing'];

	/** @test */
	function a_form_type_has_a_class()
	{
		$class = factory(FormClass::class)->create();

		$type = new FormType(['class_id' => $class->id]);

		$this->assertEquals($class->id, $type->class_id);
	}

	/** @test */
	function a_form_type_has_a_mode()
	{
		$mode = factory(Mode::class)->create();

		$type = new FormType(['mode_id' => $mode->id]);

		$this->assertEquals($mode->id, $type->mode_id);
	}

	/** @test */
	function a_form_type_has_an_order()
	{
		$order = factory(Order::class)->create();

		$type = new FormType(['order_id' => $order->id]);

		$this->assertEquals($order->id, $type->order_id);
	}

	/** @test */
	function a_form_type_has_a_subject()
	{
		$arg = Argument::all()->random();

		$type = new FormType(['subject_id' => $arg->id]);

		$this->assertEquals($arg->id, $type->subject_id);
	}

	/** @test */
	function a_form_type_has_a_primary_object()
	{
		$arg = Argument::all()->random();

		$type = new FormType(['primaryObject_id' => $arg->id]);

		$this->assertEquals($arg->id, $type->primaryObject_id);
	}

	/** @test */
	function a_form_type_has_a_secondary_object()
	{
		$arg = Argument::all()->random();

		$type = new FormType(['secondaryObject_id' => $arg->id]);

		$this->assertEquals($arg->id, $type->secondaryObject_id);
	}

	/** @test */
	function a_form_type_has_a_negative_status()
	{
		$type1 = factory(FormType::class)->create(['isNegative' => 0]);
		$type2 = factory(FormType::class)->create(['isNegative' => 1]);

		$this->assertEquals(0, $type1->isNegative);
		$this->assertEquals(1, $type2->isNegative);
	}

	/** @test */
	function a_form_type_negative_status_must_be_0_or_1()
	{
		$type1 = factory(FormType::class)->create(['isNegative' => 2]);
		$type2 = factory(FormType::class)->create(['isNegative' => -1]);
		$type3 = factory(FormType::class)->create(['isNegative' => null]);

		$this->assertEquals(null, $type1->id);
		$this->assertEquals(null, $type2->id);
		$this->assertEquals(null, $type3->id);
	}

	/** @test */
	function a_form_type_has_a_diminutive_status()
	{
		$type1 = factory(FormType::class)->create(['isDiminutive' => 0]);
		$type2 = factory(FormType::class)->create(['isDiminutive' => 1]);

		$this->assertEquals(0, $type1->isDiminutive);
		$this->assertEquals(1, $type2->isDiminutive);
	}

	/** @test */
	function a_form_type_diminutive_status_must_be_0_or_1()
	{
		$type1 = factory(FormType::class)->create(['isDiminutive' => 2]);
		$type2 = factory(FormType::class)->create(['isDiminutive' => -1]);
		$type3 = factory(FormType::class)->create(['isDiminutive' => null]);

		$this->assertEquals(null, $type1->id);
		$this->assertEquals(null, $type2->id);
		$this->assertEquals(null, $type3->id);
	}

	/** @test */
	function a_form_type_has_an_absolute_status()
	{
		$type1 = factory(FormType::class)->create();
		$type2 = factory(FormType::class)->create(['isAbsolute' => 0]);
		$type3 = factory(FormType::class)->create(['isAbsolute' => 1]);

		$this->assertEquals(null, $type1->isAbsolute);
		$this->assertEquals(0, $type2->isAbsolute);
		$this->assertEquals(1, $type3->isAbsolute);
	}

	/** @test */
	function a_form_type_absolute_status_must_be_null_or_0_or_1()
	{
		$type1 = factory(FormType::class)->create(['isAbsolute' => 2]);
		$type2 = factory(FormType::class)->create(['isAbsolute' => -1]);

		$this->assertEquals(null, $type1->id);
		$this->assertEquals(null, $type2->id);
	}

	/** @test */
	function a_form_type_saves()
	{
		$formType = new FormType([
			'class_id'           => factory(FormClass::class)->create()->id,
			'mode_id'            => factory(Mode::class)->create()->id,
			'order_id'           => factory(Order::class)->create()->id,
			'subject_id'         => Argument::all()->random()->id,
			'primaryObject_id'   => Argument::all()->random()->id,
			'secondaryObject_id' => Argument::all()->random()->id,
			'isNegative'         => 0,
			'isDiminutive'       => 1
		]);

		$formType->save();

		$this->assertGreaterThan(0, $formType->id);
	}

	/** @test */
	function a_form_type_fetches_its_forms()
	{
		$type = factory(FormType::class)->create();

		factory(Form::class, 10)->create([
			'formType_id' => $type->id
		]);

		$this->assertCount(10, $type->forms);
	}
}