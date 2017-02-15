<?php

namespace App;

use App\Example;
use App\Morpheme;
use App\Events\Language\Saved;
use App\Events\Language\Saving;
use App\Events\Language\Created;
use App\Events\Language\Deleted;
use App\Events\Language\Deleting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;

    public $table = 'Languages';
    protected $fillable = ['alternateNames', 'name','group_id','parent_id','iso','algoCode','notes', 'reconstructed'];
    protected $events = [
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFields = [
        'reconstructed' => 'boolean:Attested|Reconstructed'
    ];
    protected $revisionFormattedFieldNames = [
        'algoCode'       => 'Algonquianist Code',
        'alternateNames' => 'Alternate Names',
        'iso'            => 'ISO Code',
        'name'           => 'Name',
        'notes'          => 'Notes',
        'parent_id'      => 'Parent ID',
        'reconstructed'  => 'Reconstructed'
    ];
    
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    
    public function parent()
    {
        return $this->belongsTo(Language::class, 'parent_id');
    }
    
    public function children()
    {
        return $this->hasMany(Language::class, 'parent_id');
    }

    public function forms()
    {
        return $this->hasMany(Form::class, 'language_id');
    }

    public function examples()
    {
        // return $this->forms()->examples;
        return $this->hasManyThrough(Example::class, Form::class);
    }

    public function morphemes()
    {
        return $this->hasMany(Morpheme::class);
    }

    public function sources()
    {
        $morphemeSources = $this->loadSources('morphemes');
        $formSources = $this->loadSources('forms');
        $exampleSources = $this->loadSources('examples');

        $sources = $morphemeSources;
        if($formSources) {
            $sources = $sources->merge($formSources);
        }
        if($exampleSources) {
            $sources = $sources->merge($exampleSources);
        }

        return $sources->sortBy('short');
    }

    protected function loadSources($model)
    {
        $this->load(["$model.sources" => function ($query) use ( &$sources ) {
            $sources = $query->get()->unique();
        }]);

        return $sources;
    }
}
