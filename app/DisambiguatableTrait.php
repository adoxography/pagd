<?php

namespace App;

use Schema;

trait DisambiguatableTrait
{
    public static function bootDisambiguatableTrait()
    {
        static::creating(function ($model) {
            $model->assignDisambiguator();
        });

        static::updating(function ($model) {
            if ($model->shouldUpdateDisambiguator()) {
                $model->assignDisambiguator();
            }
        });

        static::deleting(function ($model) {
            $model->disambiguatableOnDeleting();
        });
    }

    protected function disambiguatableOnDeleting()
    {
        if ($this->getShouldAlwaysAssignDisambiguator()) {
            if (Schema::hasColumn($this->getTable(), 'hasDuplicates')) {
                $this->hasDuplicates = false;
            }
        } else {
            $this->disambiguator = null;
        }

        $this->save();

        $duplicates = $this->loadAmbiguousDuplicates();

        if (count($duplicates) == 1) {
            $duplicates[0]->markAsNotDuplicated();
        }
    }

    protected function markAsNotDuplicated()
    {
        if (!$this->getShouldAlwaysAssignDisambiguator()) {
            $this->disambiguator = null;
        }

        $this->markAsDuplicated(false);

        if (isset($this->isSourceable)) {
            $this->dontConnectSources();
        }

        $this->save();
    }

    public function getDisambiguatableFields()
    {
        if (isset($this->disambiguatableFields)) {
            return $this->disambiguatableFields;
        } else {
            return [];
        }
    }

    public function getShouldAlwaysAssignDisambiguator()
    {
        return !isset($this->shouldAlwaysAssignDisambiguator) || $this->shouldAlwaysAssignDisambiguator;
    }

    public function shouldUpdateDisambiguator()
    {
        $shouldUpdate = false;
        $fields = $this->getDisambiguatableFields();

        foreach ($this->getDirty() as $key => $value) {
            $shouldUpdate = $shouldUpdate || in_array($key, $fields);
        }

        return $shouldUpdate;
    }

    protected function saveDisambiguator($disambiguator = null)
    {
        if (isset($disambiguator)) {
            $this->disambiguator = $disambiguator;
        }

        $this->markAsDuplicated();

        if ($this->isDirty('disambiguator') ||
            (Schema::hasColumn($this->getTable(), 'hasDuplicates') && $this->isDirty('hasDuplicates'))) {
            $this->save();
        }
    }

    protected function markAsDuplicated($val = true)
    {
        if (Schema::hasColumn($this->getTable(), 'hasDuplicates')) {
            $this->hasDuplicates = $val;
        }
    }

    public function assignDisambiguator()
    {
        $duplicates = $this->loadAmbiguousDuplicates();

        if ($duplicates->count() == 0) {
            $this->markAsDuplicated(false);

            if ($this->getShouldAlwaysAssignDisambiguator()) {
                $this->disambiguator = 1;
            } else {
                $this->disambiguator = null;
            }
        } elseif ($duplicates->count() == 1) {
            $this->markAsDuplicated();

            if ($this->getShouldAlwaysAssignDisambiguator()) {
                $duplicates[0]->saveDisambiguator();
            } else {
                $duplicates[0]->saveDisambiguator(
                    isset($duplicates[0]->disambiguator) ? $duplicates[0]->disambiguator : 1
                );
            }

            $this->disambiguator = $this->firstOpenSpace($duplicates);
        } else {
            foreach ($duplicates as $duplicate) {
                $duplicate->saveDisambiguator($duplicate->disambiguator);
            }

            $this->markAsDuplicated();
            $this->disambiguator = $this->firstOpenSpace($duplicates);
        }
    }

    protected function firstOpenSpace($changes)
    {
        $found = false;
        $i = 1;

        while ($i <= count($changes) && !$found) {
            $found = ($i != $changes[$i - 1]->disambiguator);

            if (!$found) {
                $i++;
            }
        }

        return $i;
    }

    protected function loadAmbiguousDuplicates()
    {
        // Begin the query
        $query = (get_class($this))::orderBy('disambiguator');

        // Constrain all the relevant fields
        foreach ($this->getDisambiguatableFields() as $field) {
            // If there are no hyphens, constrain normally
            if (strpos($this->$field, '-') === false) {
                $query->where($field, $this->$field);
            } else {
                // If there are hyphens, treate it as a morpheme
                $query->whereIn($field, $this->generatePossibleMatches($field));
            }
        }

        if (isset($this->id)) {
            $query->where('id', '<', $this->id);
        }

        // Return the result
        return $query->get();
    }

    protected function generatePossibleMatches($field)
    {
        $noHyphens = str_replace(['*', '-'], '', $this->$field);

        return [
            $noHyphens,
            "-$noHyphens",
            "$noHyphens-",
            "-$noHyphens-"
        ];
    }
}
