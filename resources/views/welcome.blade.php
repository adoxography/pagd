@extends('layout')

@section('title')
	Welcome{{ Auth::user() ? ', '.Auth::user()->firstName : '' }}
@endsection

@section('styles')
	@foreach($styles as $style)
		<style>{!! $style !!}</style>
	@endforeach
@endsection

@section('content')

	<div class="alg-page">
		{!! $page !!}
	</div>

	<alg-map :markers="{{ App\Language::all() }}"></alg-map>
@stop