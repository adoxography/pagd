@extends('layout', ['title' => 'Add phoneme'])

@section('title')
	Add phoneme
@endsection

@section('content')
	@include('phonemes.partials.form', ['method' => 'POST', 'action' => '/phonemes'])
@endsection
