<a href="/languages/{{ $language->id }}" class="panel-block @if(Route::is('languages::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/languages/{{ $language->id }}/survey" class="panel-block @if(Route::is('languages::showSurvey')) is-active @endif">
	Datapoints <span class="tag">{{ $language->datapoints()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/forms" class="panel-block @if(Route::is('languages::showForms')) is-active @endif">
	Forms <span class="tag">{{ $language->forms()->count() + $language->gaps()->count() + $language->examples()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/morphemes" class="panel-block @if(Route::is('languages::showMorphemes')) is-active @endif">
	Morphemes <span class="tag">{{ $language->morphemes()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/paradigms" class="panel-block @if(Route::is('languages::showParadigms')) is-active @endif">
	Paradigms <span class="tag">{{ $language->countParadigms() + $language->nominalParadigms()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/phonemes" class="panel-block @if(Route::is('languages::showPhonemes')) is-active @endif">
	Phonemes <span class="tag">{{ $language->phonemes_count or 0 }}</span>
</a>
<a href="/languages/{{ $language->id }}/clusters" class="panel-block @if(Route::is('languages::showClusters')) is-active @endif">
	Clusters <span class="tag">{{ $language->clusters_count or 0 }}</span>
</a>
<a href="/languages/{{ $language->id }}/rules" class="panel-block @if(Route::is('languages::showRules')) is-active @endif">
	Rules <span class="tag">{{ $language->rules()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/sources" class="panel-block @if(Route::is('languages::showSources')) is-active @endif">
	Sources
</a>
@if(Auth::user() && Auth::user()->permissions->canEdit)
	<a href="/languages/{{ $language->id }}/log" class="panel-block @if(Route::is('languages::showLog')) is-active @endif">
		Log
	</a>
@endif