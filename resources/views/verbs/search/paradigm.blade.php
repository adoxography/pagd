@extends('layout')

@section('title')
	Verb paradigm search
@endsection

@section('content')
	<alg-paradigm-search
		:orders="{{ $orders }}"
		:modes="{{ $modes }}"
		:languages="{{ $languages }}"

		@if(isset($preset))
		active="Advanced"
		:preset="{{ json_encode($preset) }}"
		@endif
	></alg-paradigm-search>
@endsection