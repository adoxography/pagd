@extends('layout')

@section('content')
	<alg-paradigm-search
		orders="{{ $orders }}"
		modes="{{ $modes }}"
		languages="{{ $languages }}"
		{{ isset($preset) ? "active=Advanced" : '' }}
		{{ isset($preset) ? "preset=$preset" : '' }}
	></alg-paradigm-search>
@endsection