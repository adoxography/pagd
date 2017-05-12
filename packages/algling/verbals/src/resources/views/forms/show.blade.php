@extends('layout', ['title' => $form->name])

@section('title')
	<label>Verb form details:</label>
	{{ $form->name }} ({!! $form->language->renderHTML() !!})
@endsection

@include('components.show-icons', ['model' => $form])

@section('panel')
	@include('verb::forms.partials.panel')
@endsection