<?php

namespace App\Models\Phonology;

use App\Models\Phonology\Backness;
use App\Models\Phonology\Height;
use App\Models\Phonology\Manner;
use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Place;
use App\Models\Phonology\Voicing;
use App\Language;
use Illuminate\Contracts\Support\Jsonable;

class Inventory implements Jsonable
{
    protected $language;

    public $consonants;

    public $vowels;

    public $clusters;

    public $archiphonemes;

    public $features;

    public function __construct(Language $language, $includeNull = false, $constraint = null)
    {
        $this->language = $language;

        $this->loadPhonemes($includeNull, $constraint);
        $this->loadFeatures();
    }

    protected function loadPhonemes($includeNull = false, $constraint)
    {
        $query = $this->language->phonemes();
        if (isset($constraint)) {
            $query->where($constraint);
        }

        $phonemes = $query->with('features')->get();

        $this->consonants = $phonemes->where('featureable_type', 'consonantTypes')
                                    ->where('isArchiphoneme', false)
                                    ->sortBy(function ($phoneme) {
                                        return array_search(
                                            str_replace('*', '', $phoneme->algoName),
                                            ['p', 't', 'k', 'ʔ', 'θ', 's', 'š', 'h', 'č', 'm', 'n', 'r', 'w', 'y']
                                        );
                                    });
        $this->vowels = $phonemes->where('featureable_type', 'vowelTypes')
                                ->where('isArchiphoneme', false)
                                ->sortBy(function ($phoneme) {
                                    return [
                                        array_search(
                                            str_replace('*', '', $phoneme->algoName)[0],
                                            ['i', 'o', 'e', 'a']
                                        ),
                                        strlen($phoneme->algoName)];
                                });
        $this->clusters = $phonemes->where('featureable_type', 'clusterTypes')
                                ->sortBy(function ($phoneme) {
                                    $name = str_replace('*', '', $phoneme->algoName);

                                    return [
                                        array_search(
                                            $name[0],
                                            ['ʔ', 'H', 'h', 'N', 'm', 'n', 's', 'š', 'θ', 'x', 'ç', 'r']
                                        ),
                                        array_search(
                                            $name[1],
                                            ['k', 'p', 't', 'č', 's', 'š', 'x', 'θ', 'r', 'm']
                                        )
                                    ];
                                });
        $this->archiphonemes = $phonemes->where('isArchiphoneme', true);

        if ($includeNull) {
            $nullPhoneme = $phonemes->where('featureable_type', null)->first();

            if ($nullPhoneme) {
                $this->consonants->push($nullPhoneme);
                $this->vowels->push($nullPhoneme);
                $this->clusters->push($nullPhoneme);
                $this->archiphonemes->push($nullPhoneme);
            }
        }
    }

    protected function loadFeatures()
    {
        $this->features = $this->loadVowelFeatures()->merge($this->loadConsonantFeatures())->merge($this->loadClusterFeatures());
    }

    protected function loadVowelFeatures()
    {
        $featureSet = $this->vowels->filter(function ($phoneme) {
            return !$phoneme->isNull();
        })->pluck('featureable');

        return collect([
            'backnesses' => $featureSet->pluck('backness')->unique()->sortBy('id'),
            'heights'    => $featureSet->pluck('height')->unique()->sortBy('id')
        ]);
    }

    protected function loadConsonantFeatures()
    {
        $featureSet = $this->consonants->filter(function ($phoneme) {
            return !$phoneme->isNull();
        })->pluck('featureable');

        return collect([
            'places'   => $featureSet->pluck('place')->unique()->sortBy('id'),
            'manners'  => $featureSet->pluck('manner')->unique()->sortBy('id'),
            'voicings' => $featureSet->pluck('voicing')->unique()->sortBy('id')
        ]);
    }

    protected function loadClusterFeatures()
    {
        $featureSet = $this->clusters->filter(function ($phoneme) {
            return !$phoneme->isNull();
        })->pluck('featureable');

        return collect([
            'firstSegments'  => $this->getClusterFeature($featureSet, 'firstSegment', ['ʔ', 'H', 'h', 'N', 'm', 'n', 's', 'š', 'θ', 'x', 'ç', 'r']),
            'secondSegments' => $this->getClusterFeature($featureSet, 'secondSegment', ['k', 'p', 't', 'č', 's', 'š', 'x', 'θ', 'r', 'm'])
        ]);
    }

    protected function getClusterFeature($featureSet, string $column, array $dictionary)
    {
        $segments = $featureSet->pluck($column)->unique();

        return $segments->sortBy(function ($segment) use ($dictionary) {
            $index = array_search(str_replace('*', '', $segment->name), $dictionary);

            if ($index === false) {
                $index = count($dictionary);
            }

            return $index;
        });
    }

    public function getFeatures($key = '')
    {
        if (strlen($key) > 0) {
            return $this->features->get($key);
        } else {
            return $this->features;
        }
    }

    public function hasVowels()
    {
        return $this->vowels->count() > 0;
    }

    public function hasConsonants()
    {
        return $this->consonants->count() > 0;
    }

    public function hasClusters()
    {
        return $this->clusters->count() > 0;
    }

    public function hasArchiphonemes()
    {
        return $this->archiphonemes->count() > 0;
    }

    public function getVowels(Height $height, Backness $backness)
    {
        return $this->vowels->filter(function ($value) use ($backness, $height) {
            return $value->featureable->backness_id == $backness->id && $value->featureable->height_id == $height->id;
        })->sortBy(function ($value) {
            return strlen($value->name);
        });
    }

    public function getConsonants(Place $place = null, Manner $manner = null, Voicing $voicing = null)
    {
        return $this->consonants->filter(function ($value) use ($voicing, $place, $manner) {
            $rc = true;

            if (isset($place)) {
                $rc = $value->featureable->place_id == $place->id;
            }

            if (isset($manner)) {
                $rc = $rc && $value->featureable->manner_id == $manner->id;
            }

            if (isset($voicing)) {
                $rc = $rc && $value->featureable->voicing_id == $voicing->id;
            }

            return $rc;
        })->sortBy(function ($value) {
            return strlen($value->name);
        });
    }

    public function getClusters(Phoneme $firstSegment, Phoneme $secondSegment)
    {
        return $this->clusters->filter(function ($value) use ($firstSegment, $secondSegment) {
            return $value->featureable->firstSegment_id == $firstSegment->id && $value->featureable->secondSegment_id == $secondSegment->id;
        })->sortBy(function ($cluster) {
            return strlen($cluster->name);
        });
    }

    public function toJson($options = 0)
    {
        return json_encode([
            'consonants' => $this->consonants->values(),
            'vowels'     => $this->vowels->values(),
            'clusters'   => $this->clusters->values()
        ]);
    }
}
