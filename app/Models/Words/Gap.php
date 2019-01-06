<?php

namespace App\Models\Words;

use App\Models\Language;
use App\Models\Model;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;

class Gap extends Model
{
    public $table = 'word_gaps';
    protected $fillable = ['structure_id', 'language_id', 'private_notes', 'historical_notes', 'usage_notes'];

    use Sourceable, Bookmarkable;

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function structure()
    {
        return $this->morphTo();
    }
}
