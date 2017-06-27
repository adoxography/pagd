@extends('layout')

@section('title')
	<label>Phoneme details:</label>
	{{ $phoneme->name }}
@endsection

@include('components.show-icons', ['model' => $phoneme])

@section('panel')
	@include('phon::phonemes.partials.panel')
@endsection