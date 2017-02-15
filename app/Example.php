<?php

namespace App;

use App\Morpheme;
use App\Events\Example\Saved;
use App\Events\Example\Saving;
use App\Events\Example\Created;
use App\Events\Example\Deleted;
use App\Events\Example\Deleting;
use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;
    use \App\HasMorphemesTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Examples';
    protected $fillable = ['name','translation','form_id','comments','notes','morphemicForm'];

    protected $events = [
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

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
        'name'          => 'Example',
        'translation'   => 'Translation',
        'form_id'       => 'Form ID',
        'comments'      => 'Private Comments',
        'notes'         => 'Public Cotes',
        'morphemicForm' => 'Morphemes'
    ];

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }

    public function sources()
    {
        return $this->belongstoMany(Source::class, 'Sources_Examples')->withPivot('extraInfo')->orderBy('short');
    }

    public function morphemes()
    {
        return $this->belongsToMany(Morpheme::class, 'Examples_Morphemes')->orderBy('position')->withPivot('position');
    }

    public function language()
    {
        return $this->form->language();
    }
}
