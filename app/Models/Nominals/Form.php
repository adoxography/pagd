<?php

namespace App\Models\Nominals;

use App\Presenters\Nominals\FormPresenter;
use App\Traits\Nominals\HasStructure;
use App\Models\ChangeType;
use App\Models\Language;
use App\Models\Nominals\Structure;
use App\Models\Words\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    use HasStructure;

    public $uri = 'nominals/forms';

    public $presenter = FormPresenter::class;

    public static $template = [
        'name' => '',
        'phonemic_form' => '',
        'language' => Language::class,
        'structure' => Structure::class,
        'change_type' => ChangeType::class,
        'parent' => Form::class,
        'morpheme_sequence' => [],
        'morphemic_form' => '',
        'sources' => [],
        'historical_notes' => '',
        'allomorphy_notes' => '',
        'usage_notes' => '',
        'private_notes' => '',
        'translation' => ''
    ];

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
