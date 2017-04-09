<?php

namespace App\Observers;

use App\Gloss;
use App\Morpheme;

class GlossObserver {

	public function created(Gloss $gloss)
	{
		$this->reconnectMorphemes();	
	}

	public function updated(Gloss $gloss)
	{
		if($gloss->isDirty('abv')) {
			$this->reconnectMorphemes([
				$gloss->getOriginal('abv'),
				$gloss->abv
			]);
		}
	}

	protected function reconnectMorphemes($lookup)
	{
		$query = Morpheme::select('*');

		if(is_array($lookup)) {
			$firstTime = true;

			foreach($lookup as $abv) {
				if($firstTime) {
					$firstTime = false;
					$query->where('gloss', 'LIKE', "%$abv%");
				} else {
					$query->orWhere('gloss', 'LIKE', "%$abv%");
				}
			}
		} else {	
			$query->where('gloss', 'LIKE', "%$lookup%");
		}

		$morphemes = $query->get();

		foreach($morphemes as $morpheme) {
			$morpheme->connectGlosses();
		}
	}
}