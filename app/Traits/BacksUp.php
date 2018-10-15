<?php

namespace App\Traits;

use App\Events\Backup;

trait BacksUp
{
    public static function bootBacksUp()
    {
        static::saved(function () {
            event(new Backup());
        });
    }
}
