<?php

namespace App;

class ClosedWithAbv extends Closed
{
    public function __construct(){
    	parent::__construct();
    	$this->fillable[] = 'abv';
    	$this->rules['abv'] = ['required',"unique:{$this->table},abv"];
    }
}
