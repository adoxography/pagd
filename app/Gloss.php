<?php

namespace App;

use App\ClosedWithAbv;
use Illuminate\Database\Eloquent\Model;

class Gloss extends ClosedWithAbv
{
    public $table = 'Glosses';
    public static $singular = 'Gloss';
    public static $plural = 'Glosses';

    public function __construct(){
    	parent::__construct();
    }
}
