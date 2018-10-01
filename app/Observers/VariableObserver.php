<?php

namespace App\Observers;

use App\Models\StructuralSurvey\Value;
use App\Models\StructuralSurvey\Variable;

class VariableObserver {

	public function saved(Variable $variable)
	{
		$this->connectValues($variable, request()->values);
	}

	public function deleting(Variable $variable)
	{
		$this->destroyDatapoints($variable);
		$this->disconnectValues($variable);
	}

	protected function connectValues(Variable $variable, $values)
	{
		$variable->values()->detach();
		$ids = [];

		foreach($values as $value) {
			$ids[] = Value::firstOrCreate(['name' => $value])->id;
		}

		$variable->values()->attach($ids);
	}

	protected function destroyDatapoints(Variable $variable)
	{
		foreach($variable->datapoints as $datapoint) {
			$datapoint->delete();
		}
	}

	protected function disconnectValues(Variable $variable)
	{
		$variable->values()->detach();
	}
}
