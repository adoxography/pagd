<?php

namespace App;

use App\Events\Backup;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

trait BacksUpTrait {
	public static function bootBacksUpTrait() {
		static::saved(function($model) {
			event(new Backup());
		});
	}
}