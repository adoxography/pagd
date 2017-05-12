<a href="/sources/{{ $source->id }}/basic" class="panel-block @if(Route::is('sources::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/sources/{{ $source->id }}/forms" class="panel-block @if(Route::is('sources::showForms')) is-active @endif">
	Forms with citation <span class="tag">{{ $source->forms()->count() + $source->gaps()->count() + $source->examples()->count() }}</span>
</a>
<a href="/sources/{{ $source->id }}/morphemes" class="panel-block @if(Route::is('sources::showMorphemes')) is-active @endif">
	Morphemes with citation <span class="tag">{{ $source->morphemes()->count() }}</span>
</a>