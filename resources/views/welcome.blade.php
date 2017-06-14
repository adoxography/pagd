@extends('layout')

@section('title')
	Welcome{{ Auth::user() ? ', '.Auth::user()->name : '' }}
@endsection

@section('styles')
	<style>
		.alg-page p {
			margin-bottom: .55rem;
		}

		.alg-page .alg-info-box {
			display: inline-block;
			position: relative;
			margin: 1%;
			float: left;
			width: 23%;
			padding: 10px 15px 15px 15px;
			border-top: 3px solid #fef368;
			background-color: #fffdea;
		}

		.alg-page .alg-info-box-container {
			display: inline-block;
		}
	</style>
@endsection

@section('content')

	<div class="alg-page">
		{!! $page !!}
	</div>

	<alg-map></alg-map>
@stop