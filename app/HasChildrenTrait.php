<?php

namespace App;

trait HasChildrenTrait {
	
    /*
    |--------------------------------------------------------------------------
    | Static Methods
    |--------------------------------------------------------------------------
    */
	/**
	 * Attach event listeners to the model
	 * 
	 * Called automatically by Laravel 5
	 * 
	 * @return void
	 */
	public static function bootHasChildrenTrait() {
		static::deleting(function($model) {
			$model->disconnectChildren();
		});
	}

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */

    public function parent()
    {
        return $this->belongsTo(static::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(static::class, 'parent_id');
    }

    public function allChildren()
    {
        $model = $this;

        return $this->children()->with(['allchildren' => function($query) use ($model) {
            $query->select("{$this->table}.*");
        }]);
    }

    /*
    |--------------------------------------------------------------------------
    | Instance Methods
    |--------------------------------------------------------------------------
    */

    public function getCognatesAttribute()
    {
        return $this->cognates();
    }

    /**
     * Fetches a complete list of this model's cognates
     *
     * @return Illuminate\Database\Eloquent\Model The parent model of all of the cognates, with its children pre-loaded
     */
    public function cognates()
    {
        $firstAncestor = $this->firstAncestor()->load(['allChildren', 'allChildren.language']);
        $scaffolding = \App\Group::orderScaffolding();

        $this->assignPosition($firstAncestor, $scaffolding);

        return $firstAncestor;
    }

    protected function assignPosition(&$model, $scaffolding)
    {
        $model->position = $scaffolding->search(function($item) use ($model) {
            $item instanceof \App\Language && $item->id == $model->language_id;
        });

        if($model->children->count() > 0) {
            foreach($model->children as $child) {
                $this->assignPosition($child, $scaffolding);
            }

            $model->children->sortBy('position');
        }
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

	/**
	 * Disconnects any children this model may have
	 * 
	 * If this model has a parent, then that is assigned as the new parent of the children.
	 * If not, the children are set as having no parent.
	 * 
	 * @return void
	 */
	protected function disconnectChildren()
	{
        $children = $this->children;

        if(count($children) > 0) {
            foreach ($children as $child) {
                $child->parent_id = $this->parent_id;
                $child->save();
            }
        }
	}
}