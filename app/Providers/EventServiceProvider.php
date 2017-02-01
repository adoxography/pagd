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
        ],
        'App\Events\Language\Saved' => [
            'App\Listeners\Backup'
        ],
        'App\Events\Language\Deleting' => [
            'App\Listeners\Language\DisconnectChildren',
            'App\Listeners\Language\DestroyExamples',
            'App\Listeners\Language\DestroyForms',
            'App\Listeners\Language\DestroyMorphemes'
        ],

        // Form Events
        'App\Events\Form\Saved' => [
            'App\Listeners\Form\ConnectMorphemes',
            'App\Listeners\Form\ConnectDuplicates',
            'App\Listeners\Backup'
        ],
        'App\Events\Form\Deleting' => [
            'App\Listeners\Form\DestroyExamples',
            'App\Listeners\Form\DisconnectDuplicates',
            'App\Listeners\Form\DisconnectMorphemes',
            'App\Listeners\Form\DisconnectSources',
        ],

        // Morpheme Events
        'App\Events\Morpheme\Saved' => [
            'App\Listeners\Morpheme\ReconnectForms',
            'App\Listeners\Backup'
        ],
        'App\Events\Morpheme\Deleting' => [
            'App\Listeners\Morpheme\DisconnectSources',
            'App\Listeners\Morpheme\DisconnectChildren'
        ],
        'App\Events\Morpheme\Deleted' => [
            'App\Listeners\Morpheme\ReconnectForms'
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
