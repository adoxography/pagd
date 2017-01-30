<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Argument extends Model
{
    public $table = 'Arguments';

    protected $fillable = ['name', 'person', 'obviativeCode', 'number'];

    public function getPersonCode()
    {
    	$code = '';

    	switch($this->person) {
    		case('21'):
    			$code = "4";
    			break;
    		case('X'):
    			$code = "5";
    			break;
    		default:
    			$code = $this->person;
    			break;
    	}

    	if(isset($this->obviativeCode)) {
    		$code .= $this->obviativeCode;
    	} else {
    		$code .= "0";
    	}

    	return $code;
    }

    public function getNumberCode()
    {
    	if(isset($this->number)) {
    		return $this->number;
    	} else {
    		return "0";
    	}
    }
}
