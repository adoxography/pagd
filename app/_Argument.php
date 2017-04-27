<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * An argument of a form or example
 */
class Argument extends Model
{
    public $table = 'Arguments';

    protected $fillable = ['name', 'person', 'obviativeCode', 'number'];

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
}
