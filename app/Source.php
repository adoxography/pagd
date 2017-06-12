<?php

namespace App;

use App\Rule;
use Algling\Words\Models\Gap;
use Laravel\Scout\Searchable;
use Algling\Words\Models\Form;
use Algling\Words\FormRepository;
use Algling\Words\Models\Example;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Algling\Verbals\Models\Form as VerbForm;
use Illuminate\Database\Eloquent\SoftDeletes;
use Algling\Nominals\Models\Form as NominalForm;
use Algling\Verbals\VerbFormRepositoryInterface;
use Venturecraft\Revisionable\RevisionableTrait;
use Algling\Nominals\NominalFormRepositoryInterface;

class Source extends Model implements VerbFormRepositoryInterface, NominalFormRepositoryInterface
{
    use Searchable;
    use \App\BookmarkableTrait;
    use \App\DisambiguatableTrait;
    use SoftDeletes;
    use RevisionableTrait;

    public $table = 'Sources';
    protected $fillable = ['author', 'year', 'disambiguator', 'long', 'url', 'summary', 'notes'];
    protected $appends = ['display'];
    protected $disambiguatableFields = ['author', 'year'];
    protected $shouldAlwaysAssignDisambiguator = false;

    protected $verbFormRepo;
    protected $nominalFormRepo;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->verbFormRepo    = new FormRepository(VerbForm::class);
        $this->nominalFormRepo = new FormRepository(NominalForm::class);
    }

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

    public function prepareFormRepoOptions()
    {
        return [
            'id' => $this->id,
            'pivotTable'   => 'Sourceables',
            'morphIDKey'   => 'sourceable_id',
            'morphTypeKey' => 'sourceable_type',
            'foreignKey'   => 'source_id'
        ];
    }

    public function getVerbFormsAttribute()
    {
        return $this->verbFormRepo->get($this->prepareFormRepoOptions());
    }

    public function getNominalFormsAttribute()
    {
        return $this->nominalFormRepo->get($this->prepareFormRepoOptions());
    }

    public function loadVerbForms($with = [])
    {
        $this->verbFormRepo->load($this->prepareFormRepoOptions(), $with);
    }

    public function loadNominalForms($with = [])
    {
        $this->nominalFormRepo->load($this->prepareFormRepoOptions(), $with);
    }

    public function verbForms()
    {
        return $this->verbFormRepo->query($this->prepareFormRepoOptions());
    }

    public function nominalForms()
    {
        return $this->nominalFormRepo->query($this->prepareFormRepoOptions());
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

    public function verbExamples()
    {
        return $this->examples()->ofType('verbStructures');
    }

    public function nominalExamples()
    {
        return $this->examples()->ofType('nominalStructures');
    }

    public function rules()
    {
        return $this->morphedByMany(Rule::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function gaps()
    {
        return $this->morphedByMany(Gap::class, 'Sourceable')->withPivot('extraInfo');
    }

    public function renderLink()
    {
        return "<a href='/sources/{$this->id}'>{$this->display}</a>";
    }
}
