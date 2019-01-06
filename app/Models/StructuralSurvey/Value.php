<?php

namespace App\Models\StructuralSurvey;

use App\Models\Model;

class Value extends Model
{
    public $table = 'ss_values';
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
