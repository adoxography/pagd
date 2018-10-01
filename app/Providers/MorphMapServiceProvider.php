<?php

namespace App\Providers;

use App\Models\Morphology\Morpheme;
use Algling\Nominals\Models\Form as NominalForm;
use App\Models\Phonology\Phoneme;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class MorphMapServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'verbForms'  => 'Algling\Verbals\Models\Form',
            'nominalForms' => NominalForm::class,
            'forms'      => 'App\Models\Words\Form',
            'examples'   => 'App\Models\Words\Example',
            'morphemes'  => Morpheme::class,
            'gaps'       => 'App\Models\Words\Gap',
            'datapoints' => 'App\Models\StructuralSurvey\Datapoint',
            'rules'      => 'App\Rule',
            'verbStructures' => 'Algling\Verbals\Models\Structure',
            'nominalStructures' => 'Algling\Nominals\Models\Structure',
            'phonemes' => Phoneme::class,
            'consonantTypes' => 'App\Models\Phonology\ConsonantType',
            'vowelTypes' => 'App\Models\Phonology\VowelType',
            'clusterTypes' => 'App\Models\Phonology\ClusterType',
        ]);
    }
}
