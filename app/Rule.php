<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
	use SourceableTrait, BookmarkableTrait, HideableTrait;

    public $table = 'Rules';
    protected $fillable = ['name', 'abv', 'rule', 'language_id', 'publicComments', 'privateComments'];

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }
}
