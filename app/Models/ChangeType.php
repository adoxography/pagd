<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChangeType extends Model
{
    public $table = 'ChangeTypes';

    public function identifiableName()
    {
    	return $this->name;
    }
}
