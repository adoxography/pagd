<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Artisan;

/**
 * HTTP Controller for backup downloads
 */
class BackupController extends Controller
{
    /**
     * Backup the database
     *
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function store()
    {
        // Generate a unique code using the current time
        $date = Carbon::now()->format('Y-m-d-H-i-s');

        // Backup the database
        Artisan::call('db:backup', ['--database' => 'mysql', '--destination' => 'local', '--destinationPath' => "/backups/algling_{$date}", '--compression' => 'gzip']);

        // Push a download on the user
        return response()->download(storage_path("app/backups/algling_$date.gz"), "algling_$date.gz");
    }
}
