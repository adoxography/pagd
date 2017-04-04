<?php

namespace App;

use App\Form;
use App\Example;
use App\Morpheme;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class Source extends Model
{
    use Searchable;
    use \App\BookmarkableTrait;
    use \App\DisambiguatableTrait;
    use SoftDeletes;

    public $table = 'Sources';
    protected $fillable = ['author', 'year', 'disambiguator', 'long', 'url', 'summary', 'notes'];
    protected $appends = ['display'];
    protected $disambiguatableFields = ['author', 'year'];
    protected $shouldAlwaysAssignDisambiguator = false;

    public static function boot() {
        parent::boot();

        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('author')->orderBy('year', 'desc')->orderBy('disambiguator');
        });
    }

    public function getDisplayAttribute()
    {
        return "{$this->author} {$this->year}{$this->letter}";
    }

    public function getLetterAttribute()
    {
        if($this->disambiguator) {
            $alphabet = range('a', 'z');
            return $alphabet[$this->disambiguator - 1];
        } else {
            return '';
        }
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
