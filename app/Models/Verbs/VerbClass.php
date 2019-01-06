<?php

namespace App\Models\Verbs;

use App\Models\Model;
use App\Models\Verbs\Structure;
use App\Presenters\AlgPresenter;

/**
 * A verb class, largely based on the verb form's argument structure
 *
 * Named 'VerbClass' due to 'Class' being a reserved word
 */
class VerbClass extends Model
{
    public $table = 'verb_classes';

    public $fillable = ['name'];

    public function getAliasesAttribute()
    {
    	$alias = preg_replace('/(\D+)\d+/', '$1', $this->name);

    	if(strlen($alias) > 0) {
    		return $alias;
    	} else {
    		return null;
    	}
    }

    public function structures()
    {
        return $this->hasMany(Structure::class, 'class_id');
    }
}
