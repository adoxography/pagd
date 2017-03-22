<?php

namespace App;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;

trait BookmarkableTrait {

	public static function bootBookmarkableTrait()
	{
		static::deleting(function($model) {
			$model->bookmarkedBy()->detach();
		});
	}

	public function bookmarkedBy()
	{
		return $this->morphToMany('App\User', 'Bookmarkable');
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
		if(!isset($user)) {
			$user = Auth::user();
		}

		if($this->bookmarkedBy()->find($user->id)) {
			return true;
		} else {
			return false;
		}
	}
}