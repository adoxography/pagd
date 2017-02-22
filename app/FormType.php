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
    public function getSubjectNameAttribute()
    {
        if ($this->subject) {
            return $this->subject->name;
        } else {
            return "N/A";
        }
    }

    public function getPrimaryObjectNameAttribute()
    {
        if ($this->primaryObject) {
            return $this->primaryObject->name;
        } else {
            return "N/A";
        }
    }

    public function getArgumentsAttribute()
    {
        $output = $this->subject->name;

        if ($this->primaryObject) {
            $output .= "—".$this->primaryObject->name;
        }

        if ($this->secondaryObject) {
            $output .= '+'.$this->secondaryObject->name;
        }

        return $output;
    }

    public function getAbsoluteStatusAttribute()
    {
        $code = $this->isAbsolute;
        $status;

        if($code === null) {
            $status = '';
        } elseif($code === 0) {
            $status = 'Objective';
        } elseif($code === 1) {
            $status = 'Absolute';
        }

        return $status;
    }

    public function getNegativeStatusAttribute()
    {
        $status;

        if($this->isNegative) {
            $status = "Negative";
        } else {
            $status = "";
        }

        return $status;
    }

    public function getDiminutiveStatusAttribute()
    {
        $status;

        if($this->isDiminutive) {
            $status = "Diminutive";
        } else {
            $status = "";
        }

        return $status;
    }

    public function getSubClassAttribute()
    {
        $subclass = $this->formClass->name;

        if ($subclass == 'TA') {
            if ($this->subject->person == '0') {
                $subclass = 'TA Inanimate';
            } elseif ($this->subject->person == 'X') {
                $subclass = 'TA Impersonal';
            } elseif (($this->subject->person == '3' && $this->subject->obviativeCode == '2') || ($this->primaryObject->person == '3' && $this->primaryObject->obviativeCode == '2')) {
                $subclass = 'TA Obviative (non-local 3\'\')';
            } elseif ($this->subject->person == '3') {
                if (!$this->subject->obviativeCode) {
                    if ($this->primaryObject->person == '1' || $this->primaryObject->person == '2' || $this->primaryObject->person == '21') {
                        $subclass = 'TA Mixed (3—1/2)';
                    } elseif ($this->primaryObject->person == '3' && $this->primaryObject->obviativeCode == '1') {
                        $subclass = 'TA Non-local (direct)';
                    }
                } elseif ($this->subject->obviativeCode == '1') {
                    if ($this->primaryObject->person == '3' && !$this->primaryObject->obviativeCode) {
                        $subclass = 'TA Non-local (inverse)';
                    } elseif ($this->primaryObject->person == '1' || $this->primaryObject->person == '2' || $this->primaryObject->person == '21') {
                        $subclass = 'TA Obviative (mixed 3\'–1/2)';
                    }
                } else {
                    $subclass = 'TA Other';
                }
            } else { // Subject contains 1 or 2
                if ($this->primaryObject->person == '3') {
                    if (!$this->primaryObject->obviativeCode) {
                        $subclass = "TA Mixed (1/2—3)";
                    } elseif ($this->primaryObject->obviativeCode == '1') {
                        $subclass = 'TA Obviative (mixed 1/2–3\')';
                    } else {
                        $subclass = 'TA Other';
                    }
                } elseif (($this->subject->person == '2' || $this->subject->person == '21') && $this->primaryObject->person == '1') {
                    $subclass = "TA Local (2—1)";
                } elseif ($this->subject->person == '1' && ($this->primaryObject->person == '2' || $this->primaryObject->person == '21')) {
                    $subclass = "TA Local (1—2)";
                } else {
                    $subclass = 'TA Other';
                }
            }
        }

        return $subclass;
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

    public function getArguments()
    {
        return $this->arguments;
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
