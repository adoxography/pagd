<?php

namespace App\Models\Phonology;

use App\Traits\Reconstructable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Allophone extends Model
{
    use Reconstructable;

    public $table = 'phon_allophones';
    public $timestamps = false;

    protected $fillable = ['name', 'environment', 'phoneme_id'];

    public static function translateArray($array, int $phoneme_id)
    {
        $output = '';
        $firstTime = true;

        foreach ($array as $allophoneData) {
            if ($allophoneData instanceof Collection) {
                $allophoneData = $allophoneData->toArray();
            }

            if ($firstTime) {
                $firstTime = false;
            } else {
                $output .= '; ';
            }

            $allophone = $allophoneData instanceof Allophone ? $allophoneData : new Allophone($allophoneData);
            $allophone->phoneme_id = $phoneme_id;

            $output .= $allophone->rule;
        }

        return $output;
    }

    public function getNameAttribute($value)
    {
        return $this->modifyIfReconstructed("[$value]");
    }

    public function getRuleAttribute()
    {
        $output = $this->name;

        if ($this->environment) {
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
