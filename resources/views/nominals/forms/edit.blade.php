@extends('layout', ['title' => "Edit {$form->name}"])

@section('title')
	<label>Editing </label>
	{{ $form->name }}
@endsection

@section('content')
	@include('nominals.forms.partials.form', ['method' => 'PATCH', 'action' => "/nominals/forms/{$form->id}"])
@endsection
