<?php

namespace App\Models\Morphology;

use App\Models\Model;
use App\Traits\Disambiguatable;

class InitialChange extends Model
{
	use Disambiguatable;

    public $table = 'morph_initial_changes';
    protected $fillable = ['change', 'morpheme_id'];

    protected $disambiguatableFields = ['morpheme_id'];

    public function morpheme()
    {
    	return $this->belongsTo(Morpheme::class);
    }
}
