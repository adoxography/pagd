<?php

namespace Algling\SS\Models;

use Illuminate\Database\Eloquent\Model;

class Value extends Model
{
    public $table = 'SS_Values';
    protected $fillable = ['name'];
    protected $used;
    public $appends = ['used'];

    public function setUsed(bool $value)
    {
    	$this->used = $value;
    }

    public function getUsedAttribute()
    {
    	return $this->used;
    }
}
