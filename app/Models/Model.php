<?php

namespace App\Models;

use App\Traits\AdaptsToConnections;
use App\Traits\Presentable;
use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    use AdaptsToConnections, Presentable;

    public function __construct(array $attributes=[])
    {
        parent::__construct($attributes);
        $this->adaptToConnection();
    }
}
