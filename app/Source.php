<?php

namespace App;

use App\Rule;
use Algling\Words\Models\Gap;
use Laravel\Scout\Searchable;
use Algling\Words\Models\Form;
use Algling\Words\Models\Example;
use Algling\Morphemes\Models\Morpheme;
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
    	return $this->morphedByMany(Form::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function morphemes()
    {
    	return $this->morphedByMany(Morpheme::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function examples()
    {
    	return $this->morphedByMany(Example::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function rules()
    {
        return $this->morphedByMany(Rule::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function gaps()
    {
        return $this->morphedByMany(Gap::class, 'Sourceable')->withPivot('extraInfo');
    }
}
