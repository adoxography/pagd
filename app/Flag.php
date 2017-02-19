<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flag extends Model
{
    public $table = 'Flags';
    protected $fillable = ['flagged_type', 'flagged_id', 'user_id'];
}
