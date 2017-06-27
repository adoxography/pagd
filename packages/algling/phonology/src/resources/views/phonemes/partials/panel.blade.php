<a href="/phonemes/{{ $phoneme->id }}/basic" class="panel-block @if(Route::is('phonemes::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/phonemes/{{ $phoneme->id }}/log" class="panel-block @if(Route::is('phonemes::showLog')) is-active @endif">
	Credits
</a>