<?php

namespace App\Traits;

use Auth;
use Illuminate\Database\QueryException;

trait Bookmarkable {

	public static function bootBookmarkable()
	{
		static::deleting(function($model) {
			$model->bookmarkedBy()->detach();
		});
	}

	public function bookmarkedBy()
	{
		return $this->morphToMany('App\Models\Users\User', 'bookmarkable');
	}

	public function bookmark($comment = NULL)
	{
		try {
			$this->bookmarkedBy()->attach(Auth::user()->id, isset($comment) ? ['comment' => $comment] : []);
		} catch(QueryException $e) {}
	}

	public function unbookmark()
	{
		$this->bookmarkedBy()->detach(Auth::user()->id);
	}

	public function isBookmarkedBy($user = null)
	{
        $user = $user ?? Auth::user();
        return !!($this->bookmarkedBy()->find($user->id));
	}
}
