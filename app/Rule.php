<?php

namespace App;

use App\Language;
use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
	use \App\SourceableTrait;

    public $table = 'Rules';
    protected $fillable = ['name', 'abv', 'rule', 'language_id', 'publicComments', 'privateComments'];

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }
}
