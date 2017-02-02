<?php

namespace App;

use App\Form;
use App\Example;
use App\Morpheme;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    public $table = 'Sources';
    protected $fillable = ['short', 'long', 'url', 'notes'];

    public function forms()
    {
    	return $this->belongsToMany(Form::class, 'Sources_Forms')->withPivot('extraInfo');
    }

    public function morphemes()
    {
    	return $this->belongsToMany(Morpheme::class, 'Morphemes_Sources')->withPivot('extraInfo');
    }

    public function examples()
    {
    	return $this->belongsToMany(Example::class, 'Sources_Examples')->withPivot('extraInfo');
    }
}
