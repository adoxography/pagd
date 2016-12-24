<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ClosedController;
use App\Http\Requests;
use App\Order;
use Illuminate\Http\Request;

class OrderController extends ClosedController
{
    protected $plural   = 'Orders';
    protected $singular = 'Order';

    protected function getMembers()
    {
        return Order::all();
    }

    protected function createNew()
    {
        return new Order();
    }

    protected function getItem($id)
    {
        return Order::where('id', $id)->first();
    }
}
