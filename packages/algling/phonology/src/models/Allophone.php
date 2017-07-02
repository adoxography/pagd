<?php

namespace Algling\Phonology\Models;

use App\ReconstructableTrait;
use Algling\Phonology\Models\Phoneme;
use Illuminate\Database\Eloquent\Model;

class Allophone extends Model
{
    use ReconstructableTrait;

    public $table = 'Phon_Allophones';
    public $timestampes = false;

    protected $fillable = ['name', 'environment', 'phoneme_id'];

    public static function translateArray(array $array, int $phoneme_id)
    {
        $output = '';

        for($i = 0; $i < count($array); $i++) {
            $allophone = new Allophone($array[$i]);
            $allophone->phoneme_id = $phoneme_id;

            if($i > 0) {
                $output .= '; ';
            }

            $output .= $allophone->rule;
        }

        return "<ul>$output</ul>";
    }

    public function getNameAttribute($value)
    {
        return $this->modifyIfReconstructed("[$value]");
    }

    public function getRuleAttribute()
    {
        $output = $this->name;

        if($this->environment) {
            $output .= " / {$this->environment}";
        }

        return $output;
    }

    public function phoneme()
    {
    	return $this->belongsTo(Phoneme::class);
    }

    public function language()
    {
    	return $this->phoneme->language();
    }
}
