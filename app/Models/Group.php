<?php

namespace App\Models;

use App\Traits\HasChildren;
use App\Traits\Bookmarkable;
use App\Traits\Sourceable;
use App\Traits\BacksUp;
use App\Models\Language;
use App\Models\Model;
use App\Models\StructuralSurvey\Variable;
use App\Presenters\AlgPresenter;
use Venturecraft\Revisionable\RevisionableTrait;

class Group extends Model
{
    use HasChildren, Bookmarkable, Sourceable, RevisionableTrait, BacksUp;

    protected $fillable = ['name', 'parent_id', 'public_notes', 'private_notes', 'aliases'];

    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFieldNames = [
        'private_notes' => 'private notes',
        'public_notes'  => 'public notes'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'position',
        'created_at',
        'updated_at'
    ];

    protected static $template = [
        'name' => '',
        'id' => 0,
        'aliases' => [],
        'public_notes' => '',
        'private_notes' => '',
        'parent' => Group::class,
        'sources' => []
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

    public function getDisplayAttribute()
    {
        return $this->name;
    }

    public static function orderScaffolding()
    {
        $scaffolding = Group::where('id', 1)->with('allChildren', 'allChildren.languages')->get();

        $scaffolding = $scaffolding->concat(Group::flattenScaffolding($scaffolding->first()));

        Group::indexScaffolding($scaffolding);

        return $scaffolding;
    }

    public static function flattenScaffolding($group)
    {
        $output = collect();

        foreach ($group->directDescendants() as $descendant) {
            $output->push($descendant);

            if ($descendant instanceof Group) {
                $output = $output->concat(Group::flattenScaffolding($descendant));
            }
        }

        return $output;
    }

    public static function indexScaffolding(&$scaffolding)
    {
        for ($i = 0; $i < $scaffolding->count(); $i++) {
            $scaffolding[$i]->position = $i;
        }
    }

    public function languages()
    {
        return $this->hasMany(Language::class);
    }

    public function directDescendants()
    {
        $this->load([
            'languages' => function ($query) {
                $query->with('location');
            },
            'children'
        ]);

        return $this->languages->concat($this->children);
    }

    public function allLanguages()
    {
        $languages = collect();
        $descendants = $this->directDescendants();
        $class = self::class;

        foreach ($descendants as $descendant) {
            if ($descendant instanceof $class) {
                $languages = $languages->concat($descendant->allLanguages());
            } else {
                $languages->push($descendant);
            }
        }

        return $languages;
    }

    public function hasVariable(Variable $variable)
    {
        $this->load(['languages']);

        $lookup = $this->languages->filter(function ($language) use ($variable) {
            return $language->hasVariable($variable);
        });

        $found = $lookup->count() > 0;

        for ($i = 0; $i < $this->children->count() && !$found; $i++) {
            $found = $this->children[$i]->hasVariable($variable);
        }

        return $found;
    }
}
