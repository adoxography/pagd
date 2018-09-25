<?php

namespace App;

use App\Language;
use App\IGTLine;
use Illuminate\Database\Eloquent\Model;
use App\BookmarkableTrait;
use App\SourceableTrait;

class IGT extends Model
{
    use SourceableTrait, BookmarkableTrait;

    public $table = 'IGT';
    protected $fillable = ['language_id', 'publicNotes', 'privateNotes', 'lines'];

    /**
     * Property to hold temporary line data as the model is being saved
     */
    public $newLines = null;

    /**
     * The language the IGT corresponds to
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    /**
     * The individual lines of the IGT
     */
    public function lines()
    {
        return $this->hasMany(IGTLine::class, 'igt_id');
    }

    /**
     * The maximum number of tokens/tabs/cells the complete IGT will take up
     */
    public function maxTokens()
    {
        return $this->lines->map(function ($line) {
            return count($line->tokens());
        })->max();
    }
}
