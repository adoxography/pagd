@extends('layout', ['title' => $form->name])

@section('title')
	<label>Verb form details:</label>
	{!! $form->present()->then('language')->as('link', 'verbs') !!}
@endsection

@include('components.show-icons', ['model' => $form])

@section('panel')
	@include('verb::forms.partials.panel')
@endsection