@extends('layout')

@section('title')
<p class="card-header-title">
	<label>Language details:</label>
	{{ $language->name }}
</p>
@if(Auth::user())
	<alg-hidden-icon uri="/languages/{{ $language->id }}" hidden="{{ $language->isHidden() }}"></alg-hidden-icon>
	<alg-bookmark uri="/languages/{{ $language->id }}" bookmarked="{{ $language->isBookmarkedBy() }}"></alg-bookmark>
    <a href="/languages/{{ $language->id }}/edit" class="card-header-icon">
      	<span class="icon">
        	<i class="fa fa-pencil"></i>
      	</span>
    </a>
@endif
@endsection

@section('content')
<div class="columns is-gapless">
	<div class="column is-narrow">
		<nav class="panel">
			<a href="/languages/{{ $language->id }}" class="panel-block @if(Route::is('languages::showBasic')) is-active @endif">Basic details</a>
			<a href="/languages/{{ $language->id }}/children" class="panel-block @if(Route::is('languages::showChildren')) is-active @endif">Children</a>
			<a href="/languages/{{ $language->id }}/survey" class="panel-block @if(Route::is('languages::showSurvey')) is-active @endif">Structural survey</a>
			<a href="/languages/{{ $language->id }}/forms" class="panel-block @if(Route::is('languages::showForms')) is-active @endif">Forms</a>
			<a href="/languages/{{ $language->id }}/morphemes" class="panel-block @if(Route::is('languages::showMorphemes')) is-active @endif">Morphemes</a>
			<a href="/languages/{{ $language->id }}/paradigms" class="panel-block @if(Route::is('languages::showParadigms')) is-active @endif">Paradigms</a>
			<a href="/languages/{{ $language->id }}/phonemes" class="panel-block @if(Route::is('languages::showPhonemes')) is-active @endif">Phonemes</a>
			<a href="/languages/{{ $language->id }}/clusters" class="panel-block @if(Route::is('languages::showClusters')) is-active @endif">Clusters</a>
			<a href="/languages/{{ $language->id }}/rules" class="panel-block @if(Route::is('languages::showRules')) is-active @endif">Rules</a>
			<a href="/languages/{{ $language->id }}/sources" class="panel-block @if(Route::is('languages::showSources')) is-active @endif">Sources</a>
			<a href="/languages/{{ $language->id }}/log" class="panel-block @if(Route::is('languages::showLog')) is-active @endif">Log</a>
		</nav>
	</div>
	<div class="column">
		<div class="card-content">
			<div class="content">
				@yield('model-content')
			</div>
		</div>
	</div>
</div>
@endsection