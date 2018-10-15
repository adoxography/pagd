<?php

namespace App\Models\StructuralSurvey;

use App\Traits\Sourceable;
use App\Traits\Bookmarkable;
use Illuminate\Database\Eloquent\Model;

class Variable extends Model
{
	use Sourceable;
    use Bookmarkable;

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
