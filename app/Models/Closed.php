<?php

namespace App\Models;

use App\Models\Model;

abstract class Closed extends Model
{
    protected $relationList = [];
    public $singular;
    public $plural;

    public function getRelationList()
    {
        return $this->relationList;
    }
}
