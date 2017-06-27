<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

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
            'forms'      => 'Algling\Words\Models\Form',
            'examples'   => 'Algling\Words\Models\Example',
            'morphemes'  => 'Algling\Morphemes\Models\Morpheme',
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
