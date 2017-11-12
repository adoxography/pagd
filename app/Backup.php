<?php

namespace App;

use Storage;
use Carbon\Carbon;

class Backup
{
    public function handle()
    {
        $fileName = $this->save();

        $this->transfer($fileName);
    }

    protected function save()
    {
        $name = $this->createFileName();
        $path = storage_path('app/' . $name);
        $database = env('DB_DATABASE');
        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');

        exec("mysqldump -u $username -p$password $database > $path");

        return $name;
    }

    protected function transfer(string $fileName)
    {
        $this->copy($fileName, 'dropbox');

        Storage::delete($fileName);
    }

    protected function copy(string $fileName, string $disk)
    {
        $environment = app()->environment();
        $path = "$environment/$fileName";
        $fileContents = Storage::get($fileName);

        Storage::disk($disk)->put($path, $fileContents);
    }

    protected function createFileName()
    {
        $date = Carbon::now()->format('Y-m-d-H-i-s');
        $environment = app()->environment();

        return "algling_{$environment}_{$date}";
    }
}
