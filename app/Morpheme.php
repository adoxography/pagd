<?php

namespace App;

use App\Language;
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

    public static function boot(){
        parent::boot();

        static::deleting(function($model){
            foreach($model->forms as $form){
                $form->delete();
            }//foreach
        });
    }
    
    public function language(){
    	return $this->belongsTo(Language::class);
    }

    public function forms(){
    	return $this->belongsToMany(Form::class,'Forms_Morphemes');
    } 
    
    public function gloss(){
    	return $this->belongsTo(Gloss::class);
    }

    public function parent(){
        return $this->belongsTo(Morpheme::class,'parent_id');
    }

    public function children(){
        return $this->hasMany(Morpheme::class,'parent_id');
    }
    
    public function slot(){
    	return $this->belongsTo(Slot::class);
    }

    public static function createV(Language $language){
        $vStem = Morpheme::create([
            'name'        => 'V',
            'language_id' => $language->id,
            'gloss_id'    => 1,
            'slot_id'     => 1
        ]);

        if($language->parent) {
            $vStem->parent_id = $language->parent->morphemes->where('name','V')->first()->id;
        }

        return $vStem !== null;
    }
    
}
