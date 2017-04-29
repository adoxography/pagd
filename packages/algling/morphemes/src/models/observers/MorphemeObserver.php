<?php

namespace Algling\Morphemes\Models\Observers;

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
        $morphemeName = str_replace(['*', '-'], '', $morpheme->name);
        $language = $morpheme->language_id;
        $this->reconnect($morpheme->allWords());
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