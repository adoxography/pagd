<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmptyForm extends Model
{
    public $table = 'EmptyForms';
    protected $fillable = ['formType_id', 'language_id', 'comments', 'historicalNotes'];

    use \App\SourceableTrait;

    public function formType()
    {
    	return $this->belongsTo(FormType::class, 'formType_id');
    }

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }
}
