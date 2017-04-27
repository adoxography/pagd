<?php

namespace Algling\Verbals\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = 'Verb_Orders';

    protected $fillable = ['name', 'description'];
}
