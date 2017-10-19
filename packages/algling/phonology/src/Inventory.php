<?php

namespace Algling\Phonology;

use Algling\Phonology\Models\Backness;
use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Manner;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Models\Place;
use Algling\Phonology\Models\Voicing;
use App\Language;

class Inventory
{
    protected $language;

    public $consonants;

    public $vowels;

    public $clusters;

    public $archiphonemes;

    public $features;

    public function __construct(Language $language)
    {
        $this->language = $language;

        $this->loadPhonemes();
        $this->loadFeatures();
    }

    protected function loadPhonemes()
    {
        $phonemes = $this->language->phonemes;

        $this->consonants = $phonemes->where('phonemeable_type', 'consonantTypes')->where('isArchiphoneme', false);
        $this->vowels = $phonemes->where('phonemeable_type', 'vowelTypes')->where('isArchiphoneme', false);
        $this->clusters = $phonemes->where('phonemeable_type', 'clusterTypes');
        $this->archiphonemes = $phonemes->where('isArchiphoneme', true);
    }

    protected function loadFeatures()
    {
        $this->features = $this->loadVowelFeatures()->merge($this->loadConsonantFeatures())->merge($this->loadClusterFeatures());
    }

    protected function loadVowelFeatures()
    {
        $featureSet = $this->vowels->pluck('phonemeable');

        return collect([
            'backnesses' => $featureSet->pluck('backness')->unique()->sortBy('id'),
            'heights'    => $featureSet->pluck('height')->unique()->sortBy('id')
        ]);
    }

    protected function loadConsonantFeatures()
    {
        $featureSet = $this->consonants->pluck('phonemeable');

        return collect([
            'places'     => $featureSet->pluck('place')->unique()->sortBy('id'),
            'manners'    => $featureSet->pluck('manner')->unique()->sortBy('id'),
            'voicings'   => $featureSet->pluck('voicing')->unique()->sortBy('id')
        ]);
    }

    protected function loadClusterFeatures()
    {
        $featureSet = $this->clusters->pluck('phonemeable');

        return collect([
            'firstSegments' => $this->getClusterFeature($featureSet, 'firstSegment', ['ʔ', 'H', 'h', 'N', 'm', 'n', 's', 'š', 'θ', 'x', 'ç', 'r']),
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
            return $value->phonemeable->backness_id == $backness->id && $value->phonemeable->height_id == $height->id;
        })->sortBy(function ($value) {
            return strlen($value->name);
        });
    }

    public function getConsonants(Place $place = null, Manner $manner = null, Voicing $voicing = null)
    {
        return $this->consonants->filter(function ($value) use ($voicing, $place, $manner) {
            $rc = true;

            if (isset($place)) {
                $rc = $value->phonemeable->place_id == $place->id;
            }

            if (isset($manner)) {
                $rc = $rc && $value->phonemeable->manner_id == $manner->id;
            }

            if (isset($voicing)) {
                $rc = $rc && $value->phonemeable->voicing_id == $voicing->id;
            }

            return $rc;
        })->sortBy(function ($value) {
            return strlen($value->name);
        });
    }

    public function getClusters(Phoneme $firstSegment, Phoneme $secondSegment)
    {
        return $this->clusters->filter(function ($value) use ($firstSegment, $secondSegment) {
            return $value->phonemeable->firstSegment_id == $firstSegment->id && $value->phonemeable->secondSegment_id == $secondSegment->id;
        })->sortBy(function ($cluster) {
            return strlen($cluster->name);
        });
    }
}
