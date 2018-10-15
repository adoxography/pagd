<?php

namespace App\Models\IGT;

use App\Models\Language;
use App\Models\IGT\IGTLine;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;

class IGT extends Model
{
    use Sourceable, Bookmarkable;

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
