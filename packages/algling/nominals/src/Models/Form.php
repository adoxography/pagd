<?php

namespace Algling\Nominals\Models;

use Algling\Nominals\FormPresenter;
use Algling\Nominals\Traits\HasStructureTrait;
use App\Models\Words\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructureTrait;

    public $uri = 'nominals/forms';

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
        // dd($this->isStemless());
        if ($this->isStemless()) {
            return $this->examples->first()->translation;
        }

        return null;
    }

    public function present(string $method = 'name')
    {
        return new FormPresenter($this, $method);
    }
}
