<?php

namespace App\Models\Nominals;

use App\Models\Nominals\Form;
use App\Models\Words\Example as BaseExample;
use Illuminate\Database\Eloquent\Builder;

class Example extends BaseExample
{
    public static function boot() {
    	parent::boot();

        static::addGlobalScope(function(Builder $builder) {
            $builder->whereHas('form', function($query) {
                $query->where('structure_type', 'nominalStructures');
            });
        });
    }

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }
}
