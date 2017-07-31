<?php

namespace Algling\Verbals\Models;

use App\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = 'Verb_Orders';

    protected $fillable = ['name', 'description'];

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }
}
