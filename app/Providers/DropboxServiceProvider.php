<?php

namespace App\Providers;

use App\DropboxAdapter;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;
use Spatie\Dropbox\Client as DropboxClient;
use Storage;

class DropboxServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Storage::extend('dropbox', function($app, $config) {
            $client = new DropboxClient($config['authorizationToken']);

            return new Filesystem(new DropboxAdapter($client));
        });
    }
}
