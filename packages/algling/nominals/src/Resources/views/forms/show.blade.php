@extends('layout', ['title' => $form->name])

@section('title')
	<label>Nominal form details:</label>
	{!! $form->present()->as('name', 'bold')->then('language')->as('link', 'nominals') !!}
@endsection

@include('components.show-icons', ['model' => $form])

@section('panel')
	@include('nom::forms.partials.panel')
@endsection