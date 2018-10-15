<?php

namespace App\Models\Morphology;

use App\Traits\Disambiguatable;
use Illuminate\Database\Eloquent\Model;

class InitialChange extends Model
{
	use Disambiguatable;

    public $table = 'Morph_InitialChanges';
    protected $fillable = ['change', 'morpheme_id'];

    protected $disambiguatableFields = ['morpheme_id'];

    public function morpheme()
    {
    	return $this->belongsTo(Morpheme::class);
    }
}
