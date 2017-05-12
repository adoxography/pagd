@extends('layout')

@section('title')
	Add {{ $item->singular }}
@endsection

@section('content')
	@include('closed.partials.form', ['method' => 'POST', 'action' => '/'.strtolower($item->plural), 'model' => $item])
@stop