<?php

namespace App\Traits;

trait AdaptsToConnections {
    /**
     * Acts as the "constructor" for the trait, though must be called explicitly
     */
    protected function adaptToConnection()
    {
        $this->alterDateFormat();
    }

    /**
     * Sets the appropriate date format based on the default database driver
     */
    protected function alterDateFormat()
    {
        $connection = config('database.default');
        $driver = config("database.connections.$connection.driver");

        if ($driver == 'pgsql') {
            $this->dateFormat = 'Y-m-d H:i:sO';
        }
    }
}
