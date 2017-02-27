<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Validator;

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
