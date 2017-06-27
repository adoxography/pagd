@extends('layout', ['title' => 'Add phoneme']);

@section('title')
	Add phoneme
@endsection

@section('content')
	@include('phon::phonemes.partials.form', ['method' => 'POST', 'action' => '/phonemes'])
@endsection