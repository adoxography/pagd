<?php

namespace App\Models\Phonology;

use App\Models\Model;
use App\Presenters\AlgPresenter;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Reflex extends Model
{
    use Sourceable;
    use RevisionableTrait;
    use Bookmarkable;
    use Searchable;
    use BacksUp;

    public $table = 'phon_reflexes';

    protected $fillable = ['environment', 'reflex_id', 'parent_id', 'publicNotes', 'privateNotes'];

    public function getNameAttribute()
    {
        $this->load([
            'reflex',
            'reflex.language',
            'parent',
            'parent.language'
        ]);

        return "{$this->parent->language->name} {$this->parent->name} > {$this->reflex->language->name} {$this->reflex->name}";
    }

    public function getRuleAttribute()
    {
        $output = $this->name;

        if ($this->environment) {
            $output .= " / {$this->environment}";
        }

        return $output;
    }

    public function getFullRuleAttribute()
    {
        $parents = $this->parent->allParents();
    }

    public function reflex()
    {
        return $this->belongsTo(Phoneme::class);
    }

    public function parent()
    {
        return $this->belongsTo(Phoneme::class);
    }
}
