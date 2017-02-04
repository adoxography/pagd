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
	function a_form_type_has_attributes()
	{
		$class = factory(FormClass::class)->create();
		$mode = factory(Mode::class)->create();
		$order = factory(Order::class)->create();
		$subject = Argument::all()->random();
		$primaryObject = Argument::all()->random();
		$secondaryObject = Argument::all()->random();

		$type = FormType::create([
			'class_id' => $class->id,
			'mode_id' => $mode->id,
			'order_id' => $order->id,
			'subject_id' => $subject->id,
			'primaryObject_id' => $primaryObject->id,
			'secondaryObject_id' => $secondaryObject->id,
		]);

		$this->assertNotNull($class->id);
		$this->assertEquals($class->id, $type->class_id);
		$this->assertEquals($mode->id, $type->mode_id);
		$this->assertEquals($order->id, $type->order_id);
		$this->assertEquals($subject->id, $type->subject_id);
		$this->assertEquals($primaryObject->id, $type->primaryObject_id);
		$this->assertEquals($secondaryObject->id, $type->secondaryObject_id);
	}

	/** @test */
	function a_form_type_negative_status_must_be_0_or_1()
	{
		$type1 = factory(FormType::class)->create(['isNegative' => 0]);
		$type2 = factory(FormType::class)->create(['isNegative' => 1]);
		$type3 = factory(FormType::class)->create(['isNegative' => 2]);
		$type4 = factory(FormType::class)->create(['isNegative' => -1]);
		$type5 = factory(FormType::class)->create(['isNegative' => null]);

		$this->assertEquals(0, $type1->isNegative);
		$this->assertEquals(1, $type2->isNegative);
		$this->assertEquals(null, $type3->id);
		$this->assertEquals(null, $type4->id);
		$this->assertEquals(null, $type5->id);
	}

	/** @test */
	function a_form_type_diminutive_status_must_be_0_or_1()
	{
		$type1 = factory(FormType::class)->create(['isDiminutive' => 0]);
		$type2 = factory(FormType::class)->create(['isDiminutive' => 1]);
		$type3 = factory(FormType::class)->create(['isDiminutive' => 2]);
		$type4 = factory(FormType::class)->create(['isDiminutive' => -1]);
		$type5 = factory(FormType::class)->create(['isDiminutive' => null]);

		$this->assertEquals(0, $type1->isDiminutive);
		$this->assertEquals(1, $type2->isDiminutive);
		$this->assertEquals(null, $type3->id);
		$this->assertEquals(null, $type4->id);
		$this->assertEquals(null, $type5->id);
	}

	/** @test */
	function a_form_type_absolute_status_must_be_null_or_0_or_1()
	{
		$type1 = factory(FormType::class)->create();
		$type2 = factory(FormType::class)->create(['isAbsolute' => 0]);
		$type3 = factory(FormType::class)->create(['isAbsolute' => 1]);
		$type4 = factory(FormType::class)->create(['isAbsolute' => 2]);
		$type5 = factory(FormType::class)->create(['isAbsolute' => -1]);

		$this->assertEquals(null, $type1->isAbsolute);
		$this->assertEquals(0, $type2->isAbsolute);
		$this->assertEquals(1, $type3->isAbsolute);
		$this->assertEquals(null, $type4->id);
		$this->assertEquals(null, $type5->id);
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