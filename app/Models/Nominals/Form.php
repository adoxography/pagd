<?php

namespace App\Models\Nominals;

use App\Presenters\Nominals\FormPresenter;
use App\Traits\Nominals\HasStructure;
use App\Models\Words\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructure;

    public $uri = 'nominals/forms';

    public $presenter = FormPresenter::class;

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have nominal structures
        static::addGlobalScope('nominal', function (Builder $builder) {
            $builder->where('structure_type', 'nominalStructures');
        });
    }

    public function getTranslationAttribute()
    {
        if ($this->isStemless()) {
            return $this->examples->first()->translation;
        }

        return null;
    }
}
