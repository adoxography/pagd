<?php

namespace App;

use App\Form;
use App\Example;
use App\Morpheme;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    use \AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
    use \App\BookmarkableTrait;

    public $table = 'Sources';
    protected $fillable = ['short', 'long', 'url', 'summary', 'notes'];
    protected $appends = ['display'];

    public function getDisplayAttribute()
    {
        return $this->short;
    }

    /*
    |--------------------------------------------------------------------------
    | Algolia
    |--------------------------------------------------------------------------
    */

    public static $perEnvironment = true;

    public function getAlgoliaRecord()
    {
        return array_merge($this->toArray(), [
            'display' => $this->short
        ]);
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
}
