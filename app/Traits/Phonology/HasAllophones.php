<?php

namespace App\Traits\Phonology;

use Auth;
use App\Models\Phonology\Allophone;
use Illuminate\Support\Collection;
use Venturecraft\Revisionable\Revision;

trait HasAllophones
{
    protected $newAllophones = null;

    public static function bootHasAllophones()
    {
        static::saving(function ($model) {
            $model->extractAllophones();
        });

        static::saved(function ($model) {
            $model->updateAllophones();
        });
    }

    public function extractAllophones()
    {
        $dirty = $this->getDirty();

        if (isset($dirty['allophones'])) {
            $newAllophones = collect($dirty['allophones'])->filter(function ($allophone) {
                return isset($allophone['name']);
            });

            $this->newAllophones = $newAllophones->sortBy(function ($allophone) {
                return isset($allophone['environment']) ? -1 : 1;
            });

            unset($this['allophones']);
        }
    }

    /**
     * Use the request data to update the phoneme's allophones
     */
    public function updateAllophones()
    {
        $oldAllophones = $this->allophones;

        $newAllophones = $this->buildAllophoneArray();

        if ($this->allophonesChanged($newAllophones, $oldAllophones)) {
            $this->recordAllophoneRevision($newAllophones, $oldAllophones);

            // Delete the current allophones
            $this->allophones()->delete();

            // Insert the new allophones
            $this->allophones()->createMany($newAllophones->toArray());
        }
    }

    /**
     * Build an array of allophones for the phoneme
     *
     * @return array
     */
    protected function buildAllophoneArray()
    {
        $allophones = $this->newAllophones;

        if (!$allophones || count($allophones) == 0) {
            $allophones = collect([$this->generateDefaultAllophone()]);
        }

        $this->newAllophones = null;

        return $allophones;
    }

    /**
     * Generate a default allophone for the phoneme
     *
     * Uses the IPA transcription, followed by the algonquianist transcription if there was no IPA transcription
     * provided.
     */
    protected function generateDefaultAllophone()
    {
        $name = $this->ipa_name ?: $this->algo_name;

        return ['name' => str_replace(['*', '/', '[', ']'], '', $name)];
    }

    protected function allophonesChanged(Collection $newAllophones, Collection $oldAllophones)
    {
        $changed = count($newAllophones) != count($oldAllophones);

        for ($i = 0; $i < count($newAllophones) && !$changed; $i++) {
            $newAllophone = $newAllophones[$i];
            $oldAllophone = $oldAllophones[$i];

            $changed = $newAllophone['name'] != str_replace(['*', '[', ']'], '', $oldAllophone['name']) || $newAllophone['environment'] != $oldAllophone['environment'];
        }

        return $changed;
    }

    protected function recordAllophoneRevision($newAllophones, $oldAllophones)
    {
        Revision::forceCreate([
            'revisionable_type' => $this->getMorphClass(),
            'revisionable_id'   => $this->id,
            'user_id'           => Auth::user() ? Auth::user()->id : 0,
            'key'               => 'allophones',
            'old_value'         => Allophone::translateArray($oldAllophones, $this->id),
            'new_value'         => Allophone::translateArray($newAllophones, $this->id)
        ]);
    }
}
