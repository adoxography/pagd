@extends('layout', ['title' => 'Initial Changes'])

@section('title')
	Initial changes
@endsection

@section('content')
	<alg-initial-changes :languages="{{ $languages }}" :changes="{{ $changes }}"></alg-initial-changes>
@endsection