<?php

namespace App;

use App\Events\InitialChange\Creating;
use Illuminate\Database\Eloquent\Model;

class InitialChange extends Model
{
    public $table = 'InitialChanges';
    protected $fillable = ['change', 'morpheme_id'];
    protected $events = [
    	'saving' => Creating::class
    ];

    public function morpheme()
    {
    	return $this->belongsTo(Morpheme::class);
    }
}
