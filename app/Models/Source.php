<?php

namespace App\Models;

use App\Interfaces\NominalFormRepositoryInterface;
use App\Interfaces\VerbFormRepositoryInterface;
use App\Models\Morphology\Morpheme;
use App\Models\Nominals\Form as NominalForm;
use App\Models\Phonology\Phoneme;
use App\Models\Rules\Rule;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Models\Words\FormRepository;
use App\Models\Words\Gap;
use App\Presenters\AlgPresenter;
use App\Traits\Bookmarkable;
use App\Traits\Disambiguatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Source extends Model implements VerbFormRepositoryInterface, NominalFormRepositoryInterface
{
    use Searchable, Bookmarkable, Disambiguatable, RevisionableTrait;

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

    public static function boot()
    {
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
        if ($this->disambiguator) {
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
            'pivotTable'   => 'sourceables',
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
        return $this->morphedByMany(Form::class, 'sourceable')->withPivot('extra_info');
    }

    public function morphemes()
    {
        return $this->morphedByMany(Morpheme::class, 'sourceable')->withPivot('extra_info');
    }

    public function examples()
    {
        return $this->morphedByMany(Example::class, 'sourceable')->withPivot('extra_info');
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
        return $this->morphedByMany(Rule::class, 'sourceable')->withPivot('extra_info');
    }

    public function gaps()
    {
        return $this->morphedByMany(Gap::class, 'sourceable')->withPivot('extra_info');
    }

    public function phonemes()
    {
        return $this->morphedByMany(Phoneme::class, 'sourceable')->withPivot('extra_info');
    }

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }

    public function scopeInUse($query)
    {
        return $query->has('forms')
                     ->orHas('morphemes')
                     ->orHas('rules')
                     ->orHas('gaps')
                     ->orHas('phonemes')
                     ->orHas('examples');
    }
}
