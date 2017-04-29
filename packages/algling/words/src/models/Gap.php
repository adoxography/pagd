<?php

namespace Algling\Words\Models;

use App\Language;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gap extends Model
{
    public $table = 'Word_Gaps';
    protected $fillable = ['formType_id', 'language_id', 'privateNotes', 'historicalNotes'];

    use \App\SourceableTrait;
    use SoftDeletes;
    use \App\HideableTrait;
    use \App\BookmarkableTrait;
    // use \Algling\Words\Traits\HasFormTypeTrait;

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function formType()
    {
        return $this->structure();
    }

    public function structure()
    {
        return $this->morphTo();
    }
}
