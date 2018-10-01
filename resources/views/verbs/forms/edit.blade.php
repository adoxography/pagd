@extends('layout', ['title' => "Edit {$form->name}"])

@section('title')
	<label>Editing </label>
	{{ $form->name }}
@endsection

@section('content')
	@include('verbs.forms.partials.form', ['method' => 'PATCH', 'action' => "/verbs/forms/{$form->id}"])
@stop
