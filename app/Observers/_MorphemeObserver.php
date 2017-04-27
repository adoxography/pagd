<?php

namespace App\Observers;

use App\Form;
use App\Example;
use App\Morpheme;

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
        $morphemeName = str_replace(['*', '-'], '', $morpheme->name);
        $language = $morpheme->language_id;

        $forms    = $this->queryForms($language, $morphemeName);
        $examples = $this->queryExamples($language, $morphemeName);

        $this->reconnect($forms);
        $this->reconnect($examples);
	}

	protected function queryForms($language, $lookup)
	{
		$query = Form::where('language_id', $language)
					 ->where('morphemicForm', 'LIKE', "%$lookup%");

		return $query->get();
	}

	protected function queryExamples($language, $lookup)
	{
		$query = Example::whereHas('form', function($subquery) use ($language) {
			$subquery->where('language_id', $language);
		})->where('morphemicForm', 'LIKE', "%$lookup%");

		return $query->get();
	}

	protected function reconnect($data)
	{
		foreach($data as $item) {
			$item->dontConnectSources();
			$item->connectMorphemes();
		}
	}
}