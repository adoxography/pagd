<?php

namespace Algling\SS\Models\Observers;

use Algling\SS\Models\Value;
use Algling\SS\Models\Variable;

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

		for($i = 0; $i < count($values); $i++) {
			$value = $values[$i];

			if($value['id'] == 0) {
				$values[$i] = $this->registerNewValue($value['name'])->id;
			} else {
				$values[$i] = $value['id'];
			}
		}

		$variable->values()->attach($values);
	}

	protected function registerNewValue(string $name) 
	{
		return Value::create(['name' => $name]);
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