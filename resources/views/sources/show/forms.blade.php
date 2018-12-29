@php

$hasVerbs    = $source->verbForms()->count()    + $source->verbExamples()->count()    > 0;
$hasNominals = $source->nominalForms()->count() + $source->nominalExamples()->count() > 0;

$languages = App\Models\Language::all();
@endphp

@extends('sources.show')

@section('details')
	@if($hasVerbs)
		<h4 class="title is-4">Verbs</h4>
        @include('partials.show.verbs', [
            'languages' => $languages,
            'showAddButtons' => false,
            'source_id' => $source->id,
            'perPage' => 10
        ])

		@if($hasNominals)
			<hr>
		@endif
	@endif

	@if($hasNominals)
		<h4 class="title is-4">Nominals</h4>
        @include('partials.show.nominals', [
            'languages' => $languages,
            'source_id' => $source->id,
            'showAddButtons' => false,
            'perPage' => 10
        ])
	@endif
@endsection
