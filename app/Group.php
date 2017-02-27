<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Closed
{
	public $table = 'Groups';

	protected $fillable = ['name', 'description'];

	public function __construct()
	{
		$this->relationList = ['languages'];
		$this->singular = 'Group';
		$this->plural = 'Groups';
	}
	
    public function languages(){
    	return $this->hasMany(Language::class);
	}
}
