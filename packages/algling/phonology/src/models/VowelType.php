<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Length;
use Algling\Phonology\Models\Backness;
use Illuminate\Database\Eloquent\Model;
use Algling\Phonology\Interfaces\PhonemeTypeInterface;

class VowelType extends Model implements PhonemeTypeInterface
{
    public $table = 'Phon_Vowels';
    public $timestamps = false;
    public $name = 'Vowel';

    public $booleans = [
    	'isNasal',
    	'isRounded'
    ];

    protected $with = [
    	'height',
    	'backness',
    	'length'
    ];

    protected $fillable = [
    	'height_id',
    	'backness_id',
    	'length_id',
    	'isNasal',
    	'isRounded'
    ];

    public function getNameAttribute()
    {
    	return $this->name;
    }

    public function height()
    {
    	return $this->belongsTo(Height::class);
    }

    public function backness()
    {
    	return $this->belongsTo(Backness::class);
    }

    public function length()
    {
    	return $this->belongsTo(Length::class);
    }

    public function hasBooleans()
    {
    	$found = false;

    	for($i = 0; $i < count($this->booleans) && !$found; $i++) {
    		$boolean = $this->booleans[$i];

    		$found = $this->$boolean;
    	}

    	return $found;
    }

    public function convertBooleansToString()
    {
    	$str = '';

    	foreach($this->booleans as $boolean) {
    		if($this->$boolean) {
    			if(strlen($str) > 0) {
    				$str .= ', ';
    			}

    			$str .= substr($boolean, 2); // Cut off the "is"
    		}
    	}

    	return $str;
    }
}
