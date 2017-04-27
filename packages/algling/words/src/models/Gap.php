<?php

namespace Algling\Words\Models;

use App\Language;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gap extends Model
{
    public $table = 'Word_Gaps';
    protected $fillable = ['formType_id', 'language_id', 'comments', 'historicalNotes'];

    use \App\SourceableTrait;
    use SoftDeletes;
    use \App\HideableTrait;
    use \App\BookmarkableTrait;
    use \Algling\Words\Traits\HasFormTypeTrait;

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }
}
