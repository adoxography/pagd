<?php

namespace App\Observers;

use App\Language;
use Algling\Morphemes\Models\Morpheme;

class LanguageObserver {

	protected $childData;

	public function __construct()
	{
		$this->childData = ['rules', 'examples', 'forms', 'morphemes'];
	}

	public function created(Language $language)
	{
		$this->addVStem($language);
	}

	public function deleting(Language $language)
	{
		foreach($this->childData as $dataType) {
			$this->destroyData($language, $dataType);
		}
	}

	protected function addVStem(Language $language)
	{
        // Create the vStem
        $vStem = new Morpheme([
            'name'          => 'V-',
            'language_id'   => $language->id,
            'gloss'         => 'V',
            'slot_id'       => 1, // V
        ]);

        // If the language has a parent, set the vStem's parent the to parent language's vStem
        if($language->parent) {
            $parentStem = Morpheme::where('language_id', $language->parent_id)
                                  ->where('name', 'V')
                                  ->first();
            $vStem->parent_id = $parentStem->id;
        }

        $vStem->disableRevisions();
        $vStem->save();
	}

	protected function destroyData(Language $language, $dataType)
	{
		$data = $language->$dataType;

		if(count($data) > 0) {
			foreach($data as $item) {
				$item->delete();
			}
		}
	}
}