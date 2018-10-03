<?php

namespace App\Providers;

use App\Models\Morphology\Morpheme;
use App\Models\Nominals\Form as NominalForm;
use App\Models\Phonology\Phoneme;
use App\Models\Users\User;
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
            'verbForms'  => 'App\Models\Verbs\Form',
            'nominalForms' => NominalForm::class,
            'forms'      => 'App\Models\Words\Form',
            'examples'   => 'App\Models\Words\Example',
            'morphemes'  => Morpheme::class,
            'gaps'       => 'App\Models\Words\Gap',
            'datapoints' => 'App\Models\StructuralSurvey\Datapoint',
            'rules'      => 'App\Models\Rules\Rule',
            'verbStructures' => 'App\Models\Verbs\Structure',
            'nominalStructures' => 'App\Models\Nominals\Structure',
            'phonemes' => Phoneme::class,
            'consonantTypes' => 'App\Models\Phonology\ConsonantType',
            'vowelTypes' => 'App\Models\Phonology\VowelType',
            'clusterTypes' => 'App\Models\Phonology\ClusterType',
            'users' => User::class
        ]);
    }
}
