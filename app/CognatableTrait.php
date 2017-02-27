<?php

namespace App;

trait CognatableTrait {
    /**
     * Fetches a complete list of this model's cognates
     *
     * @return Illuminate\Database\Eloquent\Model The parent model of all of the cognates, with its children pre-loaded
     */
    public function cognates()
    {
        return $this->firstAncestor()->load('allChildren');
    }

    /**
     * Recursively finds the earliest ancestor in the database of this model
     *
     * @return Illuminate\Database\Eloquent\Model
     */
    protected function firstAncestor()
    {
        if ($this->parent) {
            // Recursive case
            return $this->parent->firstAncestor();
        } else {
            // Base case
            return $this;
        }
    }

    public function allChildren()
    {
        return $this->children()->with('allchildren');
    }
}