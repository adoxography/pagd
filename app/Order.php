<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = 'Orders';

    protected $fillable = ['name', 'description'];
}
