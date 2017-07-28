<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\DatabaseBackup::class,
        \App\Console\Commands\DatabaseRestore::class,
        \App\Console\Commands\IndexSearchableModels::class,
        \App\Console\Commands\ImportSources::class,
        \App\Console\Commands\SendTicketNotificationsToAdministrator::class,
        \App\Console\Commands\EmailSiteSummary::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('algling:backup')
                 ->daily();

        $schedule->command('algling:send-ticket-notifications-to-administrator')
                 ->daily();

        $schedule->command('algling:email-site-summary')
                 ->weekly();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
