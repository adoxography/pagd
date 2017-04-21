<?php

namespace Algling\SS\Models;

use App\SourceableTrait;
use App\BookmarkableTrait;
use Algling\SS\Models\Type;
use Algling\SS\Models\Value;
use Algling\SS\Models\Datapoint;
use Illuminate\Database\Eloquent\Model;

class Variable extends Model
{
	use SourceableTrait;
    use BookmarkableTrait;

    public $table = 'SS_Variables';
    protected $fillable = ['name', 'type_id', 'description', 'essay'];

    public function type()
    {
    	return $this->belongsTo(Type::class);
    }

    public function values()
    {
    	return $this->belongsToMany(Value::class, 'SS_Values_Variables');
    }

    public function datapoints()
    {
    	return $this->hasMany(Datapoint::class);
    }
}
