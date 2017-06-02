<?php

namespace Algling\SS\Models;

use App\Language;
use App\SourceableTrait;
use App\BookmarkableTrait;
use Algling\SS\Models\Value;
use Algling\SS\Models\Variable;
use Illuminate\Database\Eloquent\Model;

class Datapoint extends Model
{
	use SourceableTrait;
    use BookmarkableTrait;

    public $table = 'SS_Datapoints';
    protected $fillable = ['language_id', 'variable_id', 'value_id', 'comments', 'note'];

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function variable()
    {
    	return $this->belongsTo(Variable::class);
    }

    public function value()
    {
    	return $this->belongsTo(Value::class);
    }
}
