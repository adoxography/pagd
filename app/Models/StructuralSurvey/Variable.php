<?php

namespace App\Models\StructuralSurvey;

use App\Models\Model;
use App\Presenters\AlgPresenter;
use App\Traits\Sourceable;
use App\Traits\Bookmarkable;

class Variable extends Model
{
	use Sourceable;
    use Bookmarkable;

    public $table = 'ss_variables';
    protected $fillable = ['name', 'type_id', 'description', 'essay'];

    public function type()
    {
    	return $this->belongsTo(Type::class);
    }

    public function values()
    {
    	return $this->belongsToMany(Value::class, 'ss_values_variables');
    }

    public function datapoints()
    {
    	return $this->hasMany(Datapoint::class);
    }
}
