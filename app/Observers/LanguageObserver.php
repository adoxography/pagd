<?php

namespace App\Observers;

use Algling\SS\Models\Datapoint;
use App\Language;
use App\Models\Morphology\Morpheme;

class LanguageObserver
{
    protected $childData;

    public function __construct()
    {
        $this->childData = ['rules', 'examples', 'forms', 'morphemes', 'phonemes'];
    }

    public function created(Language $language)
    {
        $this->addVStem($language);

        $this->createExtendedDatapoints($language);
    }

    public function deleting(Language $language)
    {
        foreach ($this->childData as $dataType) {
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
        if ($language->parent) {
            $parentStem = Morpheme::where('language_id', $language->parent_id)
                                  ->where('name', 'V-')
                                  ->first();
            $vStem->parent_id = $parentStem->id;
        }

        $vStem->disableRevisions();
        $vStem->save();
    }

    protected function destroyData(Language $language, $dataType)
    {
        $data = $language->$dataType;

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item->delete();
            }
        }
    }

    protected function createExtendedDatapoints(Language $language)
    {
        if ($language->parent) {
            $extendedDatapoints = $language->parent->datapoints()->whereHas('variable', function ($query) {
                $query->where('isExtended', 1);
            })->get();

            if ($extendedDatapoints->count() > 0) {
                foreach ($extendedDatapoints as $datapoint) {
                    $newDatapoint = new Datapoint($datapoint->toArray());
                    $newDatapoint->language_id = $language->id;
                    $newDatapoint->isExtension = true;
                    $newDatapoint->save();

                    if ($datapoint->sources->count() > 0) {
                        foreach ($datapoint->sources as $source) {
                            $newDatapoint->sources()->attach($source->id, ['sourceable_type' => $datapoint->getMorphClass(), 'extraInfo' => $source->pivot->extraInfo]);
                        }
                    }
                }
            }
        }
    }
}
