<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Closed
{
	use SoftDeletes;

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
