<a href="/languages/{{ $language->id }}" class="panel-block @if(Route::is('languages::showBasic')) is-active @endif">
	Basic details
</a>
<a href="/languages/{{ $language->id }}/survey" class="panel-block @if(Route::is('languages::showSurvey')) is-active @endif">
	Datapoints <span class="tag">{{ $language->datapoints()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/verbs" class="panel-block @if(Route::is('languages::showVerbs')) is-active @endif">
	Verbs <span class="tag">{{ $language->verbForms()->count() + $language->verbGaps()->count() + $language->verbExamples()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/nominals" class="panel-block @if(Route::is('languages::showNominals')) is-active @endif">
	Nominals <span class="tag">{{ $language->nominalForms()->count() + $language->nominalExamples()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/morphemes" class="panel-block @if(Route::is('languages::showMorphemes')) is-active @endif">
	Morphemes <span class="tag">{{ $language->morphemes()->count() }}</span>
</a>
<a href="/languages/{{ $language->id }}/paradigms" class="panel-block @if(Route::is('languages::showParadigms')) is-active @endif">
	Paradigms <span class="tag">{{ $language->countVerbParadigms() + $language->nominalParadigms()->count() }}</span>
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
		Credits
	</a>
@endif