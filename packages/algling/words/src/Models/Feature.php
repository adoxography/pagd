<?php

namespace Algling\Words\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    public $table = 'Word_Features';
    protected $aliasesCache;

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

        switch($this->number) {
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

        switch($this->obviativeCode) {
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
}
