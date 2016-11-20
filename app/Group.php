<?php

namespace App;

use App\Closed;
use Illuminate\Database\Eloquent\Model;

class Group extends Closed
{
	public $table = 'Groups';
	
    public function languages(){
    	return $this->hasMany(Language::class);
	}
}
