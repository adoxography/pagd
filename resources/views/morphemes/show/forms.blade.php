@php

$hasVerbs    = $morpheme->verbForms()->count()    + $morpheme->verbExamples()->count()    > 0;
$hasNominals = $morpheme->nominalForms()->count() + $morpheme->nominalExamples()->count() > 0;

@endphp

@extends('morphemes.show')

@section('content')
	@if($hasVerbs)
		<h4 class="title is-4">Verbs</h4>
		@include('partials.show.verbs', ['model' => $morpheme, 'showAddButtons' => false])

		@if($hasNominals)
			<hr>
		@endif
	@endif

	@if($hasNominals)
		<h4 class="title is-4">Nominals</h4>
		@include('nom::partials.show.nominals', ['model' => $morpheme, 'showAddButtons' => false])
	@endif
@endsection