@extends('layout')

@section('title')
	<strong>Welcome{{ Auth::user() ? ', '.Auth::user()->firstName : '' }}</strong>
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

    <alg-map :markers="{{ App\Models\Language::with('location')->get() }}"></alg-map>
@stop
