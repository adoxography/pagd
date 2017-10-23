<?php

namespace Algling\Phonology\Models;

use App\AlgPresenter;
use App\BacksUpTrait;
use App\BookmarkableTrait;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Reflex extends Model
{
    use SourceableTrait;
    use RevisionableTrait;
    use BookmarkableTrait;
    use Searchable;
    use BacksUpTrait;

    public $table = 'Phon_Reflexes';

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

    public function present(string $method = 'name')
    {
        return new AlgPresenter($this, $method);
    }
}
