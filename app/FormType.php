<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Validator;

class FormType extends Model
{
    public $table = 'FormTypes';
    public $errors;
    protected $fillable = [
        'class_id',
        'mood_id',
        'order_id',
        'tense_id',
        'subject_id',
        'primaryObject_id',
        'secondaryObject_id',
        'isAbsolute',
        'isNegative',
        'isDiminutive'
    ];
    protected $rules = [
        'subject_id'         => ['required','integer'],
        'primaryObject_id'   => ['nullable'],
        'secondaryObject_id' => ['nullable'],
        'class_id'           => ['required','integer'],
        'order_id'           => ['required','integer'],
        'tense_id'           => ['required','integer'],
        'mood_id'            => ['required','integer'],
        'isAbsolute'         => ['nullable'],
    ];

    public static function boot(){
        parent::boot();

        static::saving(function($model){
            return $model->validate();
        });
    }

    public function validate(){
        $rc = true;
        $v = Validator::make($this->getAttributes(),$this->rules);
        if($v->fails()){
            $this->errors = $v->messages();
            $rc = false;
        }
        return $rc;
    }

    public function formClass(){
    	return $this->belongsTo(FormClass::class,'class_id');
    }

    public function mood(){
    	return $this->belongsTo(Mood::class,'mood_id');
    }

    public function order(){
 	  	return $this->belongsTo(Order::class,'order_id');
    }

    public function tense(){
    	return $this->belongsTo(Tense::class,'tense_id');
    }

    public function subject(){
    	return $this->belongsTo(Argument::class,'subject_id');
    }
    
  	public function primaryObject(){
    	return $this->belongsTo(Argument::class,'primaryObject_id');
    }
    
  	public function secondaryObject(){
    	return $this->belongsTo(Argument::class,'secondaryObject_id');
    }
}
