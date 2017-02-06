<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [

        // Language Events
        'App\Events\Language\Created' => [
            'App\Listeners\Language\AddVStem',
            'App\Listeners\Revision\HandleCreated'
        ],
        'App\Events\Language\Saving' => [
            'App\Listeners\Revision\HandleSaving'
        ],
        'App\Events\Language\Saved' => [
            'App\Listeners\Backup',
            'App\Listeners\Revision\HandleSaved'
        ],
        'App\Events\Language\Deleting' => [
            'App\Listeners\Language\DisconnectChildren',
            'App\Listeners\Language\DestroyExamples',
            'App\Listeners\Language\DestroyForms',
            'App\Listeners\Language\DestroyMorphemes',
        ],
        'App\Events\Language\Deleted' => [
            'App\Listeners\Revision\HandleDeleted'
        ],

        // Form Events
        'App\Events\Form\Created' => [
            'App\Listeners\Revision\HandleCreated'
        ],
        'App\Events\Form\Saving' => [
            'App\Listeners\Revision\HandleSaving'
        ],
        'App\Events\Form\Saved' => [
            'App\Listeners\Form\ConnectMorphemes',
            'App\Listeners\Form\ConnectDuplicates',
            'App\Listeners\Backup',
            'App\Listeners\Revision\HandleSaved'
        ],
        'App\Events\Form\Deleting' => [
            'App\Listeners\Form\DestroyExamples',
            'App\Listeners\Form\DisconnectDuplicates',
            'App\Listeners\Form\DisconnectMorphemes',
            'App\Listeners\Form\DisconnectSources',
        ],
        'App\Events\Form\Deleted' => [
            'App\Listeners\Revision\HandleDeleted'
        ],

        // Morpheme Events
        'App\Events\Morpheme\Creating' => [
            'App\Listeners\Morpheme\AssignDisambiguator'
        ],
        'App\Events\Morpheme\Created' => [
            'App\Listeners\Revision\HandleCreated'
        ],
        'App\Events\Morpheme\Saving' => [
            'App\Listeners\Revision\HandleSaved'
        ],
        'App\Events\Morpheme\Saved' => [
            'App\Listeners\Morpheme\ReconnectForms',
            'App\Listeners\Backup',
            'App\Listeners\Revision\HandleSaved'
        ],
        'App\Events\Morpheme\Deleting' => [
            'App\Listeners\Morpheme\DisconnectSources',
            'App\Listeners\Morpheme\DisconnectChildren'
        ],
        'App\Events\Morpheme\Deleted' => [
            'App\Listeners\Morpheme\ReconnectForms',
            'App\Listeners\Morpheme\ReassessDuplicates',
            'App\Listeners\Revision\HandleDeleted'
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
