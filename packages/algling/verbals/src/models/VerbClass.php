<?php

namespace Algling\Verbals\Models;

use App\AlgPresenter;
use Illuminate\Database\Eloquent\Model;

/**
 * A verb class, largely based on the verb form's argument structure
 *
 * Named 'VerbClass' due to 'Class' being a reserved word
 */
class VerbClass extends Model
{
    public $table = 'Verb_Classes';

    public $fillable = ['name'];

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }
}
