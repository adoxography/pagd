<?php

namespace Algling\Phonology\Traits;

use Algling\Phonology\Models\Allophone;
use Venturecraft\Revisionable\Revision;

trait HasAllophonesTrait {

	public static function bootHasAllophonesTrait() {

		static::saved(function($model) {
			$model->updateAllophones();
		});
	}

	/**
	 * Use the request data to update the phoneme's allophones
	 */
	public function updateAllophones()
	{
		$oldAllophones = $this->allophones->toArray();

		// Build an array of the phoneme's allophones
		$newAllophones = $this->buildAllophoneArray(
			request()->allophones,
			request()->environments
		);

		if($this->allophonesChanged($newAllophones, $oldAllophones)) {
			$this->recordAllophoneRevision($newAllophones, $oldAllophones);

			// Delete the current allophones
			$this->allophones()->delete();

			// Insert the new allophones
			$this->allophones()->createMany($newAllophones);
		}
	}

    /**
     * Build an array of allophones for the phoneme
     *
     * @param mixed $allophones the allophone names
     * @param mixed $environments the environments corresponding to the allophones
     * @return array
     */
	protected function buildAllophoneArray($allophones, $environments)
	{
		$constrained = []; // The allophones with environments
		$elsewhere = [];   // The allophones without environments

		for($i = 0; $i < count($allophones); $i++) {
			$allophone   = $allophones[$i];
			$environment = $environments[$i];

			if($allophone) {
				if($environment) {
					$constrained[] = [
						'name' => $allophone,
						'environment' => $environment
					];
				} else {
					$elsewhere[] = [
						'name' => $allophone
					];
				}
			}
		}

		// If no allophones were added, generate a default allophone to add
		if(count($constrained) + count($elsewhere) == 0) {
			$elsewhere[] = $this->generateDefaultAllophone();
		}

		// Put the elsewhere allophones after the constrained allophones
		return array_merge($constrained, $elsewhere);
	}

	/**
	 * Generate a default allophone for the phoneme
	 * 
	 * Uses the IPA transcription, followed by the algonquianist transcription if there was no IPA transcription provided.
	 */
	protected function generateDefaultAllophone()
	{
		$name = $this->ipaName ?: $this->algoName;

		return ['name' => str_replace(['*', '/', '[', ']'], '', $name)];
	}

	protected function allophonesChanged(array $newAllophones, array $oldAllophones)
	{
		$changed = count($newAllophones) != count($oldAllophones);

		if(!$changed) {
			for($i = 0; $i < count($newAllophones) && !$changed; $i++) {
				$newAllophone = $newAllophones[$i];
				$oldAllophone = $oldAllophones[$i];

				$changed = $newAllophone['name'] != $oldAllophone['name'] || $newAllophone['environment'] != $oldAllophone['environment'];
			}
		}

		return $changed;
	}

	protected function recordAllophoneRevision(array $newAllophones, array $oldAllophones)
	{
		Revision::forceCreate([
			'revisionable_type' => $this->getMorphClass(),
			'revisionable_id' => $this->id,
			'user_id' => \Auth::user()->id,
			'key' => 'allophones',
			'old_value' => Allophone::translateArray($oldAllophones, $this->id),
			'new_value' => Allophone::translateArray($newAllophones, $this->id)
		]);
	}
}