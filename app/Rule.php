<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    use SourceableTrait, BookmarkableTrait, HideableTrait;

    public $table = 'Rules';
    protected $fillable = ['name', 'abv', 'rule', 'language_id', 'publicComments', 'privateComments', 'type_id'];

    public function getNameAttribute($value)
    {
        return $this->subscript($value);
    }

    public function getRuleAttribute($value)
    {
        return $this->subscript($value);
    }

    public function getAbvAttribute($value)
    {
        return $this->subscript($value);
    }

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

    protected function subscript($str)
    {
        return preg_replace_callback('/_(\d+)/', function ($matches) {
            return "<sub>{$matches[1]}</sub>";
        }, $str);
    }
}
