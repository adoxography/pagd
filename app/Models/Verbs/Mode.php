<?php

namespace App\Models\Verbs;

use App\Presenters\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    public $table = 'Verb_Modes';
    protected $fillable = [
            'name',
            'description'
    ];

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }

    public function structures()
    {
        return $this->hasMany(Structure::class, 'mode_id');
    }
}
