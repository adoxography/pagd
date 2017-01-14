<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
	public $table = 'Groups';

	protected $fillable = ['name', 'description'];
	
    public function languages(){
    	return $this->hasMany(Language::class);
	}
}
