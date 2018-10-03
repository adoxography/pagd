<?php

namespace App\Traits;

use App\Events\Backup;

trait BacksUpTrait
{
    public static function bootBacksUpTrait()
    {
        static::saved(function () {
            event(new Backup());
        });
    }
}
