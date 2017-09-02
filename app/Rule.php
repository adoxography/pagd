<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    use SourceableTrait, BookmarkableTrait, HideableTrait;

    public $table = 'Rules';
    protected $fillable = ['name', 'abv', 'rule', 'language_id', 'publicComments', 'privateComments', 'type_id'];

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function type()
    {
        return $this->belongsTo(RuleType::class);
    }

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }
}
