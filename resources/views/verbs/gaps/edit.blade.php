@extends('layout', ['title' => "Edit {$form->structure->summary}"])

@section('title')
	<label>Editing </label>
	{{ $form->structure->summary }}
@endsection

@section('content')
	@include('verbs.forms.partials.form', ['method' => 'PATCH', 'action' => "/verbs/gaps/{$form->id}"])
@endsection
