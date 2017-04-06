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

        // Backup Event
        'App\Events\Backup' => [
            'App\Listeners\Backup'
        ],

        // Language Events
        'App\Events\Language\Created' => [
            'App\Listeners\Language\AddVStem'
        ],
        'App\Events\Language\Deleting' => [
            'App\Listeners\Language\DestroyExamples',
            'App\Listeners\Language\DestroyForms',
            'App\Listeners\Language\DestroyMorphemes',
        ],

        // Form Events
        'App\Events\Form\Saving' => [
            'App\Listeners\Form\AssignFormType'
        ],
        'App\Events\Form\Saved' => [
            'App\Listeners\Form\ConnectDuplicates',
        ],
        'App\Events\Form\Deleting' => [
            'App\Listeners\Form\DestroyExamples',
            'App\Listeners\Form\DisconnectDuplicates',
        ],

        // Morpheme Events
        'App\Events\Morpheme\Saved' => [
            'App\Listeners\Morpheme\ReconnectForms',
        ],
        'App\Events\Morpheme\Deleted' => [
            'App\Listeners\Morpheme\ReconnectForms',
            'App\Listeners\Morpheme\ReassessDuplicates',
        ],
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
