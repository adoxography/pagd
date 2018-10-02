<?php

namespace App\Models\Words;

use App\Models\Verbs\Structure as VerbStructure;
use App\Models\Nominals\Structure as NominalStructure;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    public $table = 'Word_Features';
    protected $aliasesCache;

    protected $fillable = ['name', 'person', 'number', 'obviativeCode'];
    public $timestamps = false;

    /**
     * Get the code for the person associated with this argument
     *
     * @return string A two character string where the first character represents the person and the second represents the obviative status
     */
    public function getPersonCode()
    {
        $code = $this->person;

        if ($code === '21') {
            $code = '4';
        } elseif ($code === 'X') {
            $code = '5';
        }

        if (isset($this->obviativeCode)) {
            $code .= $this->obviativeCode;
        } else {
            $code .= "0";
        }

        return $code;
    }

    /**
     * Get the code for the number associated with this argument
     *
     * @return string A single character string representing the number
     */
    public function getNumberCode()
    {
        if (isset($this->number)) {
            return $this->number;
        } else {
            return "0";
        }
    }

    public function getNumberStringAttribute()
    {
        $str = null;

        switch ($this->number) {
            case 1:
                $str = 's';
                break;
            case 2:
                $str = 'd';
                break;
            case 3:
                $str = 'p';
                break;
            default:
                break;
        }

        return $str;
    }

    public function getObviativeStringAttribute()
    {
        $str = null;

        switch ($this->obviativeCode) {
            case 1:
                $str = '\'';
                break;
            case 2:
                $str = '\'\'';
                break;
            default:
                break;
        }

        return $str;
    }

    public function getObviativeNameAttribute()
    {
        switch ($this->obviativeCode) {
        case 1:
            return 'Obviative';
        case 2:
            return 'Double obviative';
        default:
            return '';
        }
    }

    public static function pattern()
    {
        $persons = verEx()->oneOf(['1st', '2nd', '3rd', '21', '1', '2', '3\'\'', '3\'', '3', 'first', 'second', 'third', '0', 'X'], true)
                          ->maybe(' person');

        $numbers = verEx()->maybe(' ')
                          ->oneOf([
                            verEx()->oneOf(['singular', 'dual', 'plural']),
                            verEx()->oneOf(['sg', 'du', 'pl', 's', 'd', 'p'])
                          ], true);

        $inclusive = verEx(' ')->then('inclusive', true);

        $animacies = verEx(' ')->oneOf(['inanimate', 'animate'], true);

        $obviatives = verEx(' ')->oneOf(['double obviative', 'obviative', 'obv'], true);

        $feature = verEx($persons)->maybe($numbers)
                                  ->maybe($inclusive)
                                  ->maybe($animacies)
                                  ->maybe($obviatives);

        $structure = verEx($feature)->maybe(verEx('-', true)->then($feature))->maybe(verEx('\+', true)->then($feature));

        return $structure;
    }

    public function subjectStructures()
    {
        return $this->hasMany(VerbStructure::class, 'subject_id');
    }

    public function primaryObjectStructures()
    {
        return $this->hasMany(VerbStructure::class, 'primaryObject_id');
    }

    public function secondaryObjectStructures()
    {
        return $this->hasMany(VerbStructure::class, 'secondaryObject_id');
    }

    public function nominalStructures()
    {
        return $this->hasMany(NominalStructure::class, 'nominalFeature_id');
    }

    public function pronominalStructures()
    {
        return $this->hasMany(NominalStructure::class, 'pronominalFeature_id');
    }
}
