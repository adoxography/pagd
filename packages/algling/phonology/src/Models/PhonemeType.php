<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Model;

abstract class PhonemeType extends Model
{
    public $timestamps = false;

    protected $with = [];
    protected $booleans = [];

    public function identifiableName()
    {
        $output = $this->convertRelationsToString();
        $booleans = $this->convertBooleansToString();

        if (strlen($booleans) > 0) {
            $ouptut .= ', ' . $booleans;
        }

        return $output;
    }

    public function getNameAttribute()
    {
        return $this->name;
    }

    public function hasBooleans()
    {
        $found = false;

        for ($i = 0; $i < count($this->booleans) && !$found; $i++) {
            $boolean = $this->booleans[$i];

            $found = $this->$boolean;
        }

        return $found;
    }

    public function convertRelationsToString()
    {
        $this->load($this->with);
        $str = '';

        foreach ($this->with as $relation) {
            if ($this->$relation) {
                if (strlen($str) > 0) {
                    $str .= ', ';
                }

                $str .= $this->$relation->name;
            }
        }

        return $str;
    }

    public function convertBooleansToString()
    {
        $str = '';

        foreach ($this->booleans as $boolean) {
            if ($this->$boolean) {
                if (strlen($str) > 0) {
                    $str .= ', ';
                }

                $str .= substr($boolean, 2); // Cut off the "is"
            }
        }

        return $str;
    }
}
