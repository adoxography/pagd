@extends('layout', ['title' => 'Add audio clip'])

@section('title')
	Add audio clip
@endsection

@section('content')
	@include('audio.partials.form', ['method' => 'POST', 'action' => '/audio'])
@endsection