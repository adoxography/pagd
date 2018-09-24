<?php

namespace App;

use App\Language;
use App\IGTLine;
use Illuminate\Database\Eloquent\Model;
use App\SourceableTrait;

class IGT extends Model
{
    use SourceableTrait;

    public $newLines = null;

    public $table = 'IGT';
    protected $fillable = ['language_id', 'publicNotes', 'privateNotes', 'lines'];

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function lines()
    {
        return $this->hasMany(IGTLine::class, 'igt_id');
    }
}
