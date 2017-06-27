<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Place;
use Algling\Phonology\Models\Manner;
use Illuminate\Database\Eloquent\Model;
use Algling\Phonology\Interfaces\PhonemeTypeInterface;

class ConsonantType extends Model implements PhonemeTypeInterface
{
    public $table = 'Phon_Consonants';
    public $timestamps = false;
    public $name = 'Consonant';

    protected $fillable = [
    	'manner_id', 
    	'place_id', 
    	'voicing_id',
    	'isRounded',
    	'isPalatalized',
    	'isGlottalized'
    ];

    protected $with = [
    	'manner',
    	'place',
    	'voicing'
    ];

    public $booleans = [
    	'isRounded',
    	'isPalatalized',
    	'isGlottalized'
    ];

    public function getNameAttribute()
    {
    	return $this->name;
    }

    public function manner()
    {
    	return $this->belongsTo(Manner::class);
    }

    public function place()
    {
    	return $this->belongsTo(Place::class);
    }

    public function voicing()
    {
    	return $this->belongsTo(Voicing::class);
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
