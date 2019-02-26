<?php

namespace App\Observers;

use Illuminate\Support\Arr;
use App\Models\StructuralSurvey\Datapoint;

class DatapointObserver
{
	public function saving(Datapoint $datapoint)
	{
		if($datapoint->isExtended) {
			$this->extendToChildren($datapoint);
		} else if($datapoint->isDirty('isExtended')) {
			$this->removeExtensions($datapoint);
		}
	}

	public function deleting(Datapoint $datapoint)
	{
		// If the variable wasn't extended from its parent, check to see if it was overriding an extending parent
		if(!$datapoint->isExtended) {
			$parentDatapoint = $datapoint->language->parent->getVariable($datapoint->variable);

			if($parentDatapoint && $parentDatapoint->isExtended) {
				$this->extendToChildren($parentDatapoint);
			}
		} else {
			$this->removeExtensions($datapoint);
		}
	}

	protected function extendToChildren(Datapoint $datapoint)
	{
		$language = $datapoint->language;

		if($language->children->count() > 0) {
			foreach($language->children as $child) {

				$childDatapoint = $child->getVariable($datapoint->variable);

				if(!$childDatapoint) {
					$childDatapoint = new Datapoint($datapoint->toArray());
					$childDatapoint->language_id = $child->id;
					$childDatapoint->isExtension = true;

					$childDatapoint->save();
				} else if($childDatapoint->isExtension) {
					$childDatapoint->update(Arr::except($datapoint->getAttributes(), ['id', 'created_at', 'updated_at', 'language_id', 'isExtension']));

					$childDatapoint->connectSources(request()->sources);
				}
			}
		}
	}

	protected function removeExtensions(Datapoint $datapoint)
	{
		$language = $datapoint->language;

		if($language->children->count() > 0) {
			foreach($language->children as $child) {

				$childVariable = $child->getVariable($datapoint->variable);

				if($childVariable && $childVariable->isExtension) {
					$childVariable->delete();
				}
			}
		}
	}
}
