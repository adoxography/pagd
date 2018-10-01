<a href="/variables/{{ $variable->id }}/basic" class="panel-block @if(Route::is('variables::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/variables/{{ $variable->id }}/datapoints" class="panel-block @if(Route::is('variables::showDatapoints')) is-active @endif">
	Datapoints
</a>
<a href="/variables/{{ $variable->id }}/languages" class="panel-block @if(Route::is('variables::showLanguages')) is-active @endif">
	Languages
</a>