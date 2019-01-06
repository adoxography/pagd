<?php

namespace App\Models\Verbs;

use App\Presenters\Verbs\FormPresenter;
use App\Traits\Verbs\HasStructure;
use App\Models\Words\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructure;

    public $uri = 'verbs/forms';

    public $presenter = FormPresenter::class;

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have verb structures
        static::addGlobalScope('verb', function (Builder $builder) {
            $builder->where('structure_type', 'verbStructures');
        });
    }
}
