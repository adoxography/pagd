<?php

namespace App;

use App\Language;
use App\Events\MorphemeSaved;
use Illuminate\Database\Eloquent\Model;

class Morpheme extends Model
{
    public $table = 'Morphemes';
    protected $fillable = [
        'name',
        'language_id',
        'parent_id',
        'gloss_id',
        'slot_id',
        'allomorphyNotes',
        'historicalNotes',
        'comments'
    ];
    protected $events = [
        'saved' => MorphemeSaved::class
    ];

    public static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            foreach ($model->forms as $form) {
                $form->morphemes()->detach($model->id);
            }//foreach
        });
    }
    
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function forms()
    {
        return $this->belongsToMany(Form::class, 'Forms_Morphemes');
    }
    
    public function gloss()
    {
        return $this->belongsTo(Gloss::class);
    }

    public function parent()
    {
        return $this->belongsTo(Morpheme::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Morpheme::class, 'parent_id');
    }
    
    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function sources()
    {
        return $this->belongstoMany(Source::class, 'Morphemes_Sources')->withPivot('extraInfo');
    }

    public function connectSources($sources)
    {
        $this->sources()->detach();

        foreach ($sources as $source) {
            $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
        }
    }
}
