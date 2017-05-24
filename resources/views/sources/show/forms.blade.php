@php

$hasVerbs    = $source->verbForms()->count()    + $source->verbExamples()->count()    > 0;
$hasNominals = $source->nominalForms()->count() + $source->nominalExamples()->count() > 0;

@endphp

@extends('sources.show')

@section('content')
	@if($hasVerbs)
		<h4 class="title is-4">Verbs</h4>
		@include('partials.show.verbs', ['model' => $source, 'showAddButtons' => false])

		@if($hasNominals)
			<hr>
		@endif
	@endif

	@if($hasNominals)
		<h4 class="title is-4">Nominals</h4>
		@include('nom::partials.show.nominals', ['model' => $source, 'showAddButtons' => false])
	@endif
@endsection