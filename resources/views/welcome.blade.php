@extends('layout')

@section('title')
	Welcome{{ Auth::user() ? ', '.Auth::user()->name : '' }}
@endsection

@section('content')

	<div class="alg-page">
		{!! $page !!}
	</div>

	<alg-map :markers="{{ App\Language::all() }}"></alg-map>
@stop