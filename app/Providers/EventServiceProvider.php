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
        'App\Events\LanguageSaved' => [
            'App\Listeners\AddVStemToLanguage',
        ],

        'App\Events\FormSaved' => [
            'App\Listeners\ConnectMorphemesToForm',
            'App\Listeners\ConnectDuplicatesToForm',
        ],

        'App\Events\MorphemeSaved' => [
            'App\Listeners\ConnectFormsToMorpheme'
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
