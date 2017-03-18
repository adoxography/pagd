<?php

namespace App;

use Illuminate\Support\Facades\Auth;

trait BookmarkableTrait {

	public static function bootBookmarkableTrait()
	{
		static::deleting(function($model) {
			$model->bookmarkedBy()->detach();
		});
	}

	public function bookmarkedBy()
	{
		return $this->morphToMany('App\Users', 'bookmarkable');
	}

	public function bookmark($comment = NULL)
	{
		return 'hello';
		$this->bookmarkedBy()->attach(Auth::user()->id, isset($comment) ? ['comment' => $comment] : []);
	}
}