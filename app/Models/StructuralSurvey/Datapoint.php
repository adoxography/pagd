<?php

namespace App\Models\StructuralSurvey;

use App\Models\Language;
use App\Traits\Sourceable;
use App\Traits\Bookmarkable;
use App\Presenters\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class Datapoint extends Model
{
	use Sourceable;
    use Bookmarkable;

    public $table = 'SS_Datapoints';
    protected $fillable = ['language_id', 'variable_id', 'value_id', 'comments', 'note', 'isExtended', 'isExtension'];

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function variable()
    {
    	return $this->belongsTo(Variable::class);
    }

    public function getNameAttribute() {
        return "{$this->language->name}/{$this->variable->name}";
    }

    public function value()
    {
    	return $this->belongsTo(Value::class);
    }

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }
}
