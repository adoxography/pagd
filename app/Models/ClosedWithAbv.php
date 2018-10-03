<?php

namespace App\Models;

use App\Models\Closed;

class ClosedWithAbv extends Closed
{
    public function __construct(){
    	parent::__construct();
    	$this->fillable[] = 'abv';
    	$this->rules['abv'] = ['required',"unique:{$this->table},abv"];
    }
}
