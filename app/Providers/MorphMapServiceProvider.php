<?php

namespace App\Providers;

use App\Models\Morphology\Morpheme;
use Algling\Nominals\Models\Form as NominalForm;
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
            'forms'      => 'Algling\Words\Models\Form',
            'examples'   => 'Algling\Words\Models\Example',
            'morphemes'  => Morpheme::class,
            'gaps'       => 'Algling\Words\Models\Gap',
            'datapoints' => 'Algling\SS\Models\Datapoint',
            'rules'      => 'App\Rule',
            'verbStructures' => 'Algling\Verbals\Models\Structure',
            'nominalStructures' => 'Algling\Nominals\Models\Structure',
            'consonants' => 'Algling\Phonology\Models\Consonant',
            'vowels'     => 'Algling\Phonology\Models\Vowel',
            'clusters'   => 'Algling\Phonology\Models\Cluster',
            'consonantTypes' => 'Algling\Phonology\Models\ConsonantType',
            'vowelTypes' => 'Algling\Phonology\Models\VowelType',
            'clusterTypes' => 'Algling\Phonology\Models\ClusterType',
        ]);
    }
}
