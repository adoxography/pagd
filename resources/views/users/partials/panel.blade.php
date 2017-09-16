<a href="/users/{{ $user->slug }}" class="panel-block @if(Route::is('users::show') || Route::is('users::profile')) is-active @endif">
	Basic details
</a>
<a href="/users/{{ $user->slug }}/history" class="panel-block @if(Route::is('users::showHistory')) is-active @endif">
	History
</a>
