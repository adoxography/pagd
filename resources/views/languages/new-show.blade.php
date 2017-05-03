@extends('new-layout')

@section('title')
<p class="card-header-title">
	<label>Language details:</label>
	{{ $language->name }}
</p>
@endsection

@section('content')
<div class="columns is-gapless">
	<div class="column is-narrow">
		<nav class="panel">
			<a href="#" class="panel-block is-active">Basic details</a>
			<a href="/sandbox/languages/{{ $language->id }}/children" class="panel-block @if(route('languages::showChildren')) is-active @endif">Children</a>
			<a href="#" class="panel-block">Structural survey</a>
			<a href="#" class="panel-block">Forms</a>
			<a href="#" class="panel-block">Morphemes</a>
			<a href="#" class="panel-block">Paradigms</a>
			<a href="#" class="panel-block">Phonemes</a>
			<a href="#" class="panel-block">Clusters</a>
			<a href="#" class="panel-block">Rules</a>
			<a href="#" class="panel-block">Sources</a>
			<a href="#" class="panel-block">Log</a>
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