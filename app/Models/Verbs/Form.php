<?php

namespace App\Models\Verbs;

use App\Presenters\Verbs\FormPresenter;
use App\Traits\Verbs\HasStructureTrait;
use App\Models\Words\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructureTrait;

    public $uri = 'verbs/forms';

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have verb structures
        static::addGlobalScope('verb', function (Builder $builder) {
            $builder->where('structure_type', 'verbStructures');
        });
    }

    public function present(string $method = 'name')
    {
        return new FormPresenter($this, $method);
    }
}
