<?php

namespace App;

use App\Form;
use Validator;
use Illuminate\Database\Eloquent\Model;

class FormType extends Model
{
    public $table = 'FormTypes';
    public $errors;
    protected $fillable = [
        'class_id',
        'mode_id',
        'order_id',
        'subject_id',
        'primaryObject_id',
        'secondaryObject_id',
        'isAbsolute',
        'isNegative',
        'isDiminutive'
    ];

    protected $rules = [
        'subject_id'         => ['required','integer','exists:Arguments,id'],
        'primaryObject_id'   => ['nullable','integer','exists:Arguments,id'],
        'secondaryObject_id' => ['nullable','integer','exists:Arguments,id'],
        'class_id'           => ['required','integer','exists:Classes,id'],
        'order_id'           => ['required','integer','exists:Orders,id'],
        'mode_id'            => ['required','integer','exists:Modes,id'],
        'isAbsolute'         => ['nullable','boolean'],
        'isNegative'         => ['required','boolean'],
        'isDiminutive'       => ['required','boolean']
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            // The request's validator should catch any errors, but just to be safe
            return $model->validate();
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */
    public function getSubjectPersonAttribute() {
        if($this->subject) {
            return $this->subject->person;
        }
        else {
            return "N/A";
        }
    }

    public function getSubjectNumberAttribute() {
        if($this->subject) {
            return $this->subject->number;
        }
        else {
            return "N/A";
        }
    }

    public function validate()
    {
        $rc = true;
        $v = Validator::make($this->getAttributes(), $this->rules);

        if ($v->fails()) {
            $this->errors = $v->messages();
            $rc = false;
        }

        return $rc;
    }

    public function getSubClass()
    {
        $subclass = $this->formClass->name;

        if($subclass == 'TA') {
            if($this->subject->person == '2' && $this->primaryObject->person == '1') {
                $subclass = "TA Local (2-1)";
            } elseif($this->subject->person == '1' && $this->primaryObject->person == '2') {
                $subclass = "TA Local (1-2)";
            }
        }

        return $subclass;
    }

    public function getArguments()
    {
        $output = $this->subject->name;

        if($this->primaryObject) {
            $output .= "—".$this->primaryObject->name;
        }

        if($this->secondaryObject) {
            $output .= '+'.$this->secondaryObject->name;
        }

        return $output;
    }

    public function formClass()
    {
        return $this->belongsTo(FormClass::class, 'class_id');
    }

    public function mode()
    {
        return $this->belongsTo(Mode::class, 'mode_id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function subject()
    {
        return $this->belongsTo(Argument::class, 'subject_id');
    }
    
    public function primaryObject()
    {
        return $this->belongsTo(Argument::class, 'primaryObject_id');
    }
    
    public function secondaryObject()
    {
        return $this->belongsTo(Argument::class, 'secondaryObject_id');
    }

    public function forms()
    {
        return $this->hasMany(Form::class, 'formType_id');
    }

    public function hasModifiers()
    {
        return $this->isNegative || $this->isDiminutive || isset($this->isAbsolute);
    }
}
