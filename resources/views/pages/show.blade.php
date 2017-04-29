@extends('layout', ['title' => $title])

@section('header')
	@foreach($styles as $style)
		<style>{!! $style !!}</style>
	@endforeach
@endsection

@section('content')

	<div class="heading">
		<h1 class="title">{{ $title }}</h1>
	</div>
	<br />

	<div class="alg-page box">
		{!! $page !!}
	</div>
@endsection