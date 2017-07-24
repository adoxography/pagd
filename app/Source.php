<?php

namespace App;

use Algling\Nominals\Models\Form as NominalForm;
use Algling\Nominals\NominalFormRepositoryInterface;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Verbals\VerbFormRepositoryInterface;
use Algling\Words\FormRepository;
use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use Algling\Words\Models\Gap;
use App\Models\Morphology\Morpheme;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Source extends Model implements VerbFormRepositoryInterface, NominalFormRepositoryInterface
{
    use Searchable, BookmarkableTrait, DisambiguatableTrait, SoftDeletes, RevisionableTrait;

    public $table = 'Sources';
    protected $fillable = ['author', 'year', 'disambiguator', 'long', 'url', 'summary', 'notes'];
    protected $appends = ['display'];
    protected $disambiguatableFields = ['author', 'year'];
    protected $shouldAlwaysAssignDisambiguator = false;

    protected $verbFormRepo;
    protected $nominalFormRepo;

    /*
    |--------------------------------------------------------------------------
    | Revision variables
    |--------------------------------------------------------------------------
    |
    | These are variable overrides used by the Revisionable trait.
    |
    */
    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFieldNames = [
        'created_at' => '[created]'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

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

    public function getNameAttribute()
    {
        return $this->display;
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

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }
}
