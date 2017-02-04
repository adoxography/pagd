@extends('layout')

@section('content')
	<alg-paginated-list list="{{ $forms }}">
	</alg-paginated-list>
@endsection