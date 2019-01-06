@extends('layout', ['title' => 'Add verb form'])

@section('title')
    <h1 class="title is-4">Add verb form</h1>
@endsection

@section('content')
	@include('verbs.forms.partials.form', ['method' => 'POST', 'action' => '/verbs/forms'])
@stop
