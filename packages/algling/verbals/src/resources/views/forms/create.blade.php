@extends('layout', ['title' => 'Add verb form'])

@section('title')
	Add verb form
@endsection

@section('content')
	@include('verb::forms.partials.form', ['method' => 'POST', 'action' => '/verbs/forms'])
@stop