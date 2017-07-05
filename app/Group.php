<?php

namespace App;

use App\SourceableTrait;
use App\HasChildrenTrait;
use App\BookmarkableTrait;
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

	protected $fillable = ['name', 'parent_id', 'publicNotes', 'privateNotes'];

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
        return $this->name;
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

	public function renderLink()
	{
		return "<a href=\"/groups/{$this->id}\">{$this->name} languages</a>";
	}

	public function directDescendants()
	{
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

}