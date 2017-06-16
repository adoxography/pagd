<a href="/examples/{{ $example->id }}/basic" class="panel-block @if(Route::is('examples::showBasic')) is-active @endif">Basic details</a>
<a href="/examples/{{ $example->id }}/cognates" class="panel-block @if(Route::is('examples::showCognates')) is-active @endif">Cognates</a>
<a href="/examples/{{ $example->id }}/log" class="panel-block @if(Route::is('examples::showLog')) is-active @endif">Log</a>