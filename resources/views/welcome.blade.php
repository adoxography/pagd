@extends('layout')

@section('title')
	Welcome{{ Auth::user() ? ', '.Auth::user()->name : '' }}
@endsection

@section('content')
	{!! $page !!}
@stop