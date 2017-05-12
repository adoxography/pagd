<a href="/variables/{{ $variable->id }}/basic" class="panel-block @if(Route::is('variables::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/variables/{{ $variable->id }}/essay" class="panel-block @if(Route::is('variables::showEssay')) is-active @endif">
	Essay
</a>
<a href="/variables/{{ $variable->id }}/datapoints" class="panel-block @if(Route::is('variables::showDatapoints')) is-active @endif">
	Datapoints
</a>