<?php

namespace Algling\Morphemes\Models\Observers;

use Algling\Words\Models\Form;
use Algling\Words\Models\Example;
use Algling\Morphemes\Models\Morpheme;

class MorphemeObserver {

	public function saved(Morpheme $morpheme)
	{
		$this->reconnectData($morpheme);
		$morpheme->connectGlosses();
	}

	public function deleted(Morpheme $morpheme)
	{
		$this->reconnectData($morpheme);
	}

	protected function reconnectData(Morpheme $morpheme)
	{
        $morphemeNames = $this->getNames($morpheme);
        $language = $morpheme->language_id;

        $this->reconnect($this->queryForms($language, $morphemeNames));
        $this->reconnect($this->queryExamples($language, $morphemeNames));
	}

	protected function reconnect($data)
	{
		foreach($data as $item) {
			$item->dontConnectSources();
			$item->connectMorphemes();
		}
	}

	protected function getNames(Morpheme $morpheme)
	{
		$output = [$morpheme->name];

		if($morpheme->isDirty('name')) {
			$output[] = $morpheme->getOriginal('name');
		}

		return str_replace(['*', '-'], '', $output);
	}

	protected function queryForms($language, array $lookups)
	{
		$firstTime = true;
		$query = Form::where('language_id', $language);

		foreach($lookups as $lookup) {
			if($firstTime) {
				$firstTime = false;
				$query->where('morphemicForm', 'LIKE', "%$lookup%");
			} else {
				$query->orWhere('morphemicForm', 'LIKE', "%$lookup%");
			}
		}

		return $query->get();
	}

	protected function queryExamples($language, array $lookups)
	{
		$firstTime = true;
		$query = Example::whereHas('form', function($subquery) use ($language) {
			$subquery->where('language_id', $language);
		});

		foreach($lookups as $lookup) {
			if($firstTime) {
				$firstTime = false;
				$query->where('morphemicForm', 'LIKE', "%$lookup%");
			} else {
				$query->orWhere('morphemicForm', 'LIKE', "%$lookup%");
			}
		}

		return $query->get();
	}
}