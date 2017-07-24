<?php

namespace App\Providers;

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

        'Illuminate\Auth\Events\Login' => [
            'App\Listeners\LogSuccessfulLogin'
        ],

        'App\Events\Audio\Deleting' => [
            'App\Listeners\DeleteFile'
        ],

        'App\Events\FileOrphaned' => [
            'App\Listeners\DeleteFile'
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
