@extends('layout', ['title' => $phoneme->name])

@section('title')
	<label>{{ $phoneme->type == 'Cluster' ? 'Cluster' : 'Phoneme' }} details:</label>
	{!! $phoneme->present('link')->with('language')->as('link', $phoneme->type == 'Cluster' ? 'clusters' : 'phonemes') !!}
@endsection

@include('components.show-icons', ['model' => $phoneme])

@section('panel')
	@include('phon::phonemes.partials.panel')
@endsection