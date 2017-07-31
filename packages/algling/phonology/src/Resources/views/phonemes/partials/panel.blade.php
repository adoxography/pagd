@php
	$uri = $phoneme->type == 'Cluster' ? 'clusters' : 'phonemes';
@endphp

<a href="/{{ $uri }}/{{ $phoneme->id }}/basic" class="panel-block @if(Route::is($uri . '::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/{{ $uri }}/{{ $phoneme->id }}/reflexes" class="panel-block @if(Route::is($uri . '::showReflexes')) is-active @endif">
	Reflexes
</a>
<a href="/{{ $uri }}/{{ $phoneme->id }}/log" class="panel-block @if(Route::is($uri . '::showLog')) is-active @endif">
	Credits
</a>