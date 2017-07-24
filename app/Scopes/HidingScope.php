<?php

namespace App\Scopes;

use Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Builder;

class HidingScope implements Scope {

	public function apply(Builder $builder, Model $model)
	{
		$user = Auth::user();

		if(!$user || !$user->permissions->canEdit) {
			$builder->whereNull($model->getQualifiedHiddenAtColumn());
		}
	}
}