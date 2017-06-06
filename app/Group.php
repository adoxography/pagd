<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Closed
{
	use SoftDeletes;

	public $table = 'Groups';

	protected $fillable = ['name', 'description'];

	public $relationList = ['languages'];
	public $singular = 'Group';
	public $plural = 'Groups';

	public function identifiableTrait()
	{
		return $this->name;
	}
	
    public function languages(){
    	return $this->hasMany(Language::class);
	}
}
