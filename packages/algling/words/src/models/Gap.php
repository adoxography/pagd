<?php

namespace Algling\Words\Models;

use App\BookmarkableTrait;
use App\HideableTrait;
use App\Language;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gap extends Model
{
    public $table = 'Word_Gaps';
    protected $fillable = ['structure_id', 'language_id', 'privateNotes', 'historicalNotes'];

    use SourceableTrait, SoftDeletes, HideableTrait, BookmarkableTrait;

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function structure()
    {
        return $this->morphTo();
    }
}
