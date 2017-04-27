<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmptyForm extends Model
{
    public $table = 'EmptyForms';
    protected $fillable = ['formType_id', 'language_id', 'comments', 'historicalNotes'];

    use \App\SourceableTrait;
    use SoftDeletes;
    use \App\HideableTrait;
    use \App\BookmarkableTrait;
    use \App\HasFormTypeTrait;

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }
}
