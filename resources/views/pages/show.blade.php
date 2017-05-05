@extends('layout', ['title' => $title])

@section('header')
	@foreach($styles as $style)
		<style>{!! $style !!}</style>
	@endforeach
@endsection

@section('title')
<p class="card-header-title">
	{{ $title }}
</p>
@endsection

@section('content')
	<div class="card-content">
		{{ $page }}
	</div>
@endsection