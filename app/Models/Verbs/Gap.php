<?php

namespace App\Models\Verbs;

use App\Presenters\Verbs\GapPresenter;
use App\Traits\Verbs\HasStructure;
use App\Models\Words\Gap as WordGap;
use Illuminate\Database\Eloquent\Builder;

class Gap extends WordGap
{
    use HasStructure;

    public $uri = 'verbs/gaps';

    public $presenter = GapPresenter::class;

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have verb structures
        static::addGlobalScope('verb', function (Builder $builder) {
            $builder->where('structure_type', 'verbStructures');
        });
    }
}
