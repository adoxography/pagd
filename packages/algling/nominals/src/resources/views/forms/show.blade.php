@extends('layout', ['title' => $form->name])

@section('title')
	<label>Nominal form details:</label>
	{{ $form->name }} ({!! $form->language->renderHTML() !!})
@endsection

@include('components.show-icons', ['model' => $form])

@section('panel')
	@include('nom::forms.partials.panel')
@endsection