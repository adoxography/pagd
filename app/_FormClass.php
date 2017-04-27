<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * A verb class, largely based on the verb form's argument structure
 *
 * Named 'FormClass' due to 'Class' being a reserved word
 */
class FormClass extends Model
{
    public $table = 'Classes';

    public $fillable = ['name'];
}
