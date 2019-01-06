<?php

namespace App\Models\Rules;

use App\Models\Language;
use App\Models\Model;
use App\Models\Rules\RuleType;
use App\Presenters\AlgPresenter;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;

class Rule extends Model
{
    use Sourceable, Bookmarkable;

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

    protected function subscript($str)
    {
        return preg_replace_callback('/_(\d+)/', function ($matches) {
            return "<sub>{$matches[1]}</sub>";
        }, $str);
    }
}
