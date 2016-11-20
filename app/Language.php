<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    public $table = 'Languages';
    protected $fillable = ['name','group_id','parent_id','iso','algoCode'];

    public static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            //Set the parent of any children this language has to this language's parent
            foreach ($model->children as $child) {
                $child->parent_id = $model->parent->id;
                $child->save();
            }//foreach

            //Delete all of its forms
            foreach ($model->forms as $form) {
                $form->delete();
            }//foreach

            //Delete all of its examples
            foreach ($model->morphemes as $morpheme) {
                $morpheme->delete();
            }//foreach
        });
    }//boot
    
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

    public function morphemes()
    {
        return $this->hasMany(Morpheme::class);
    }
}
