<a href="/morphemes/{{ $morpheme->id }}/basic" class="panel-block @if(Route::is('morphemes::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/morphemes/{{ $morpheme->id }}/cognates" class="panel-block @if(Route::is('morphemes::showCognates')) is-active @endif">
	Cognates
</a>
<a href="/morphemes/{{ $morpheme->id }}/forms" class="panel-block @if(Route::is('morphemes::showForms')) is-active @endif">
	Forms <span class="tag">{{ $morpheme->forms()->count() + $morpheme->examples()->count() }}</span>
</a>