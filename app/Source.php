<?php

namespace App;

use App\Form;
use App\Example;
use App\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Source extends Model
{
    use \App\BookmarkableTrait;
    use SoftDeletes;

    public $table = 'Sources';
    protected $fillable = ['short', 'long', 'url', 'summary', 'notes'];
    protected $appends = ['display'];

    public function getDisplayAttribute()
    {
        return $this->short;
    }

    public function forms()
    {
    	return $this->morphedByMany('App\Form', 'Sourceable')->withPivot('extraInfo');
    }

    public function morphemes()
    {
    	return $this->morphedByMany('App\Morpheme', 'Sourceable')->withPivot('extraInfo');
    }

    public function examples()
    {
    	return $this->morphedByMany('App\Example', 'Sourceable')->withPivot('extraInfo');
    }

    public function rules()
    {
        return $this->morphedByMany('App\Rule', 'Sourceable')->withPivot('extraInfo');
    }

    public function emptyForms()
    {
        return $this->morphedByMany('App\EmptyForm', 'Sourceable')->withPivot('extraInfo');
    }
}
