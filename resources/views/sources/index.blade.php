@extends('layout')

@section('title')
	Sources @include('components.model.add-icon', ['uri' => "/sources/create"])
@endsection

@section('content')
	<alg-source-index sources="{{ json_encode($sources) }}"></alg-source-index>
@stop
