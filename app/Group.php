<?php

namespace App;

use Algling\SS\Models\Variable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Venturecraft\Revisionable\RevisionableTrait;

class Group extends Model
{
	use SoftDeletes;
	use HasChildrenTrait;
	use BookmarkableTrait;
	use SourceableTrait;
	use RevisionableTrait;

	public $table = 'Groups';

	protected $fillable = ['name', 'parent_id', 'publicNotes', 'privateNotes', 'aliases'];

    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFieldNames = [
        'privateNotes' => 'private notes',
        'publicNotes'  => 'public notes'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'position',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

    public function getDisplayAttribute()
    {
        return $this->name;
    }

	public static function orderScaffolding() {
    	$scaffolding = Group::where('id', 1)->with('allChildren', 'allChildren.languages')->get();

    	$scaffolding = $scaffolding->concat(Group::flattenScaffolding($scaffolding->first()));

    	Group::indexScaffolding($scaffolding);

    	return $scaffolding;
	}

	public static function flattenScaffolding($group) {
		$output = collect();

		foreach($group->directDescendants() as $descendant) {
			$output->push($descendant);

			if($descendant instanceof Group) {
				$output = $output->concat(Group::flattenScaffolding($descendant));
			}
		}

		return $output;
	}

	public static function indexScaffolding(&$scaffolding) {
		for($i = 0; $i < $scaffolding->count(); $i++) {
			$scaffolding[$i]->position = $i;
		}
	}
	
    public function languages()
    {
    	return $this->hasMany(Language::class);
	}

	public function directDescendants()
	{
		$this->load(['languages', 'children']);

		return $this->languages->concat($this->children);
	}

	public function allLanguages()
	{
		$languages = collect();
	    $descendants = $this->directDescendants();
	    $class = self::class;

	    foreach($descendants as $descendant) {
	    	if($descendant instanceof $class) {
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

		$lookup = $this->languages->filter(function($language) use ($variable) {
			return $language->hasVariable($variable);
		});

		$found = $lookup->count() > 0;

		for($i = 0; $i < $this->children->count() && !$found; $i++) {
			$found = $this->children[$i]->hasVariable($variable);
		}

		return $found;
	}

	public function present(string $method = 'name')
	{
		return new AlgPresenter($this, $method);
	}

}