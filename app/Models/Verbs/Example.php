<?php

namespace App\Models\Verbs;

use App\Models\Verbs\Form;
use App\Models\Words\Example as BaseExample;

class Example extends BaseExample
{
    public static function boot() {
    	parent::boot();

         static::addGlobalScope(function(Builder $builder) {
             $builder->whereHas('form', function($query) {
                 $query->where('structure_type', 'verbalStructures');
             });
         });
    }

    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }
}
