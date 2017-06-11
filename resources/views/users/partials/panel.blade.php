<a href="/users/{{ $user->id }}" class="panel-block @if(Route::is('users::show') || Route::is('users::profile')) is-active @endif">
	Basic details
</a>
<a href="/users/{{ $user->id }}/history" class="panel-block @if(Route::is('users::showHistory')) is-active @endif">
	History
</a>