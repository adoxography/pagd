@php

$hasVerbs    = $morpheme->verbForms()->count()    + $morpheme->verbExamples()->count()    > 0;
$hasNominals = $morpheme->nominalForms()->count() + $morpheme->nominalExamples()->count() > 0;

@endphp

@extends('morphemes.show')

@section('details')
	@if($hasVerbs)
		<h4 class="title is-4">Verbs</h4>
        @include('partials.show.verbs', [
            'language_id' => $morpheme->language_id,
            'morpheme_id' => $morpheme->id,
            'perPage' => 10,
            'showAddButtons' => false
        ])

		@if($hasNominals)
			<hr>
		@endif
	@endif

	@if($hasNominals)
		<h4 class="title is-4">Nominals</h4>
        @include('partials.show.nominals', [
            'language_id' => $morpheme->language_id,
            'paradigms' => $morpheme->language->paradigms,
            'morpheme_id' => $morpheme->id,
            'perPage' => 10,
            'showAddButtons' => false
        ])
	@endif
@endsection
