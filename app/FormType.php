<?php

namespace App;

use App\Form;
use Validator;
use Illuminate\Database\Eloquent\Model;

/**
 * The syntax information about a form
 */
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

    public static function boot() {
        parent::boot();

        static::saving(function($model) {
            $model->assignSubclass();
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */

    public function getSummaryAttribute()
    {
        $output = "{$this->arguments} {$this->formClass->name} {$this->order->name} {$this->mode->name}";

        return $output;
    }

    /**
     * Shortcut to get the name of the subject
     *
     * Reaches through the subject argument
     *
     * @return string The name of the subject; N/A if the subject is null
     */
    public function getSubjectNameAttribute()
    {
        if ($this->subject) {
            return $this->subject->name;
        } else {
            return "N/A";
        }
    }

    /**
     * Shortcut to get the name of the primary object
     *
     * Reaches through the primary object argument
     *
     * @return string The name of the primary object; N/A if the primary object is null
     */
    public function getPrimaryObjectNameAttribute()
    {
        if ($this->primaryObject) {
            return $this->primaryObject->name;
        } else {
            return "N/A";
        }
    }

    /**
     * Get a formatted print out of the type's arguments
     *
     * @return string
     */
    public function getArgumentsAttribute()
    {
        $output = $this->subject->name;

        if ($this->primaryObject) {
            $output .= "—{$this->primaryObjectName}";
        }

        if ($this->secondaryObject) {
            $output .= "+{$this->secondaryObjectName}";
        }

        return $output;
    }

    /**
     * Get the name of the absolute status
     *
     * @return string
     */
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

    /**
     * Get the name of the negative status
     *
     * @return string
     */
    public function getNegativeStatusAttribute()
    {
        if ($this->isNegative) {
            return 'Negative';
        } else {
            return '';
        }
    }

    /**
     * Get the name of the diminutive status
     *
     * @return string
     */
    public function getDiminutiveStatusAttribute()
    {
        if ($this->isDiminutive) {
            return 'Diminutive';
        } else {
            return '';
        }
    }

    public function assignSubclass()
    {
        $subclass;

        if ($this->formClass->name == 'TA') {
            // Only TA verbs have subclasses

            if ($this->subject->person == '0') {
                // All TA forms with an inanimate subject are TA Inanimate
                $subclass = 'TA Inanimate';
            } elseif ($this->subject->person == 'X') {
                // All TA forms with an impersonal subject are TA Impersonal
                $subclass = 'TA Impersonal';
            } elseif (($this->subject->person == '3' && $this->subject->obviativeCode == '2') || ($this->primaryObject->person == '3' && $this->primaryObject->obviativeCode == '2')) {
                // All TA forms with 3'' as their subject OR primary object are TA Obviative (non-local 3'')
                $subclass = 'TA Obviative (non-local 3\'\')';
            } elseif ($this->subject->person == '3') {
                if (!$this->subject->obviativeCode) {
                    if ($this->primaryObject->person == '1' || $this->primaryObject->person == '2' || $this->primaryObject->person == '21') {
                        // All TA forms with a non-obviative animate third person subject and a 1st or 2nd person primary object are TA Mixed (3-1/2)
                        $subclass = 'TA Mixed (3—1/2)';
                    } elseif ($this->primaryObject->person == '3' && $this->primaryObject->obviativeCode == '1') {
                        // All TA forms with a non-obviative animate third person subject and an obviative animate third person primary object are TA Non-local (direct)
                        $subclass = 'TA Non-local (direct)';
                    }
                } elseif ($this->subject->obviativeCode == '1') {
                    if ($this->primaryObject->person == '1' || $this->primaryObject->person == '2' || $this->primaryObject->person == '21') {
                        // All TA forms with an obviative animate third person subject and a 1st or 2nd person primary object are TA Obviative (mixed 3'-12)
                        $subclass = 'TA Obviative (mixed 3\'–1/2)';
                    } elseif ($this->primaryObject->person == '3' && !$this->primaryObject->obviativeCode) {
                        // All TA forms with an obviative animate third person subject and a non-obviative third person primary object are TA Non-local (inverse)
                        $subclass = 'TA Non-local (inverse)';
                    }
                }
            } else { // Subject contains 1 or 2
                if ($this->primaryObject->person == '3') {
                    if (!$this->primaryObject->obviativeCode) {
                        $subclass = "TA Mixed (1/2—3)";
                    } elseif ($this->primaryObject->obviativeCode == '1') {
                        $subclass = 'TA Obviative (mixed 1/2–3\')';
                    }
                } elseif (($this->subject->person == '2' || $this->subject->person == '21') && $this->primaryObject->person == '1') {
                    $subclass = "TA Local (2—1)";
                } elseif ($this->subject->person == '1' && ($this->primaryObject->person == '2' || $this->primaryObject->person == '21')) {
                    $subclass = "TA Local (1—2)";
                }
            }

            // Catch any exceptions to the rules
            if ($subclass === 'TA') {
                $subclass = 'TA Other';
            }

            $this->subclass = $subclass;
        }     
    }

    /**
     * Get the name of the class of the type
     *
     * TA forms have a fair bit of parsing based on their arguments to determine what their subclass is
     *
     * @return string The name of the class or subclass
     */
    public function getSubclassAttribute($value)
    {
        if($value) {
            return $value;
        } else {
            return $this->formClass->name;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */
    
    /**
     * Determines if the type has any extra modifiers associated with it
     *
     * Specifically, looks to see if it's negative, diminutive, or has an absolute status (absolute or objective)
     *
     * @return boolean
     */
    public function hasModifiers()
    {
        return $this->isNegative || $this->isDiminutive || isset($this->isAbsolute);
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */

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
}
