<?php

namespace App\Models\Verbs;

use App\Presenters\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $table = 'verb_orders';

    protected $fillable = ['name', 'description'];

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }

    public function structures()
    {
        return $this->hasMany(Structure::class, 'order_id');
    }
}
