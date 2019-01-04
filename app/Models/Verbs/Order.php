<?php

namespace App\Models\Verbs;

use App\Models\Model;
use App\Presenters\AlgPresenter;

class Order extends Model
{
    public $table = 'verb_orders';

    protected $fillable = ['name', 'description'];

    public function structures()
    {
        return $this->hasMany(Structure::class, 'order_id');
    }

    public static function fieldTemplate($root = true)
    {
        return collect([
            'fields' => [
                'name' => '',
                'id' => 0
            ]
        ]);
    }
}
