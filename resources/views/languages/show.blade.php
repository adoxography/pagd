@extends('layout', ['title' => $language->name])

@section('title')
	<label>Language details:</label>
	{{ $language->name }}
@endsection

@include('components.show-icons', ['model' => $language])

@section('panel')
	@include('languages.partials.panel')
@endsection