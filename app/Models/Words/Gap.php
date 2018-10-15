<?php

namespace App\Models\Words;

use App\Traits\Bookmarkable;
use App\Traits\Hideable;
use App\Models\Language;
use App\Traits\Sourceable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gap extends Model
{
    public $table = 'Word_Gaps';
    protected $fillable = ['structure_id', 'language_id', 'privateNotes', 'historicalNotes', 'usageNotes'];

    use Sourceable, SoftDeletes, Hideable, Bookmarkable;

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function structure()
    {
        return $this->morphTo();
    }
}
