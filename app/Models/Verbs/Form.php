<?php

namespace App\Models\Verbs;

<<<<<<< HEAD
use App\Models\ChangeType;
=======
>>>>>>> Replace verb form form template with blade components
use App\Models\Language;
use App\Models\Verbs\Structure;
use App\Models\Words\Form as WordForm;
use App\Presenters\Verbs\FormPresenter;
use App\Traits\Verbs\HasStructure;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructure;

    public $uri = 'verbs/forms';

    public $presenter = FormPresenter::class;

    public static $template = [
        'name' => '',
<<<<<<< HEAD
        'historical_notes' => '',
        'allomorphy_notes' => '',
        'usage_notes' => '',
        'private_notes' => '',
        'empty' => false,
        'language' => Language::class,
        'structure' => Structure::class,
        'parent' => Form::class,
        'change_type' => ChangeType::class,
        'morphemes' => []
=======
        'empty' => false,
        'language' => Language::class,
        'structure' => Structure::class
>>>>>>> Replace verb form form template with blade components
    ];

    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have verb structures
        static::addGlobalScope('verb', function (Builder $builder) {
            $builder->where('structure_type', 'verbStructures');
        });
    }
}
