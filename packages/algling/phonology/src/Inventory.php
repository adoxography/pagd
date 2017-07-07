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

	public $features;

	public function __construct(Language $language)
	{
		$this->language = $language;

		$this->loadPhonemes();
		$this->loadFeatures();
	}

	protected function loadPhonemes()
	{
		$this->language->load('phonemes');

		$phonemes = $this->language->phonemes;

		$this->consonants = $phonemes->where('phonemeable_type', 'consonantTypes');
		$this->vowels = $phonemes->where('phonemeable_type', 'vowelTypes');
		$this->clusters = $phonemes->where('phonemeable_type', 'clusterTypes');
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
			'firstSegments' => $featureSet->pluck('firstSegment')->unique(),
			'secondSegments' => $featureSet->pluck('secondSegment')->unique()
		]);
	}

	public function getFeatures($key = '')
	{
		if(strlen($key) > 0) {
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

	public function getVowels(Height $height, Backness $backness)
	{
		return $this->vowels->filter(function($value) use($backness, $height) {
			return $value->phonemeable->backness_id == $backness->id && $value->phonemeable->height_id == $height->id;
		})->sortBy(function($value) {
			return strlen($value->name);
		});
	}

	public function getConsonants(Place $place = null, Manner $manner = null, Voicing $voicing = null)
	{
		return $this->consonants->filter(function($value) use ($voicing, $place, $manner) {
			$rc = true;

			if(isset($place)) {
				$rc = $value->phonemeable->place_id == $place->id;
			}

			if(isset($manner)) {
				$rc = $rc && $value->phonemeable->manner_id == $manner->id;
			}

			if(isset($voicing)) {
				$rc = $rc && $value->phonemeable->voicing_id == $voicing->id;
			}

			return $rc;
		})->sortBy(function($value) {
			return strlen($value->name);
		});
	}

	public function getClusters(Phoneme $firstSegment, Phoneme $secondSegment)
	{
		return $this->clusters->filter(function($value) use ($firstSegment, $secondSegment) {
			return $value->phonemeable->firstSegment_id == $firstSegment->id && $value->phonemeable->secondSegment_id == $secondSegment->id;
		})->sortBy(function($cluster) {
			return strlen($cluster->name);
		});
	}
}