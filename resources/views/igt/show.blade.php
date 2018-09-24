@extends('layout', ['title' => 'IGT'])

@section('title')
	<label>IGT details:</label>
	{{--{!! $language->present()->as('name', 'bold') !!}--}}
@endsection

@include('components.show-icons', ['model' => $igt])

@section('panel')
	@include('igt.partials.panel')
@endsection
