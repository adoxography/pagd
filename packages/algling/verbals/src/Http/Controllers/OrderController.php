<?php

namespace Algling\Verbals\Http\Controllers;

use Algling\Verbals\Models\Order;
use App\Http\Controllers\AlgModelController;

class OrderController extends AlgModelController
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function store()
    {
        $data = request()->validate(['name' => 'required']);
        Order::create($data);
        return back();
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return back();
    }
}
