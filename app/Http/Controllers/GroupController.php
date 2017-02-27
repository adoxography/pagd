<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Requests;
use App\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GroupController extends ClosedController
{
    public function show(Group $group)
    {
        return parent::showItem($group);
    }

    public function edit(Group $group)
    {
        return parent::editItem($group);
    }	
}
