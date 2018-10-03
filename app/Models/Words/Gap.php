<?php

namespace App\Models\Words;

use App\Traits\BookmarkableTrait;
use App\Traits\HideableTrait;
use App\Models\Language;
use App\Traits\SourceableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gap extends Model
{
    public $table = 'Word_Gaps';
    protected $fillable = ['structure_id', 'language_id', 'privateNotes', 'historicalNotes', 'usageNotes'];

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
