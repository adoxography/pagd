<?php

namespace Algling\Nominals\Models;

use App\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    public $table = 'Nom_Modes';

    protected $fillable = ['name'];

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }
}
