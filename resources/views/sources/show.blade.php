@extends('layout')

@section('title')
	<label>Source details:</label>
	{{ $source->display }}
@endsection

@include('components.show-icons', ['model' => $source])

@section('panel')
	@include('sources.partials.panel')
@endsection