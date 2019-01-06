<?php

namespace App\Models;

use App\Models\Model;

class ChangeType extends Model
{
    public function identifiableName()
    {
    	return $this->name;
    }
}
