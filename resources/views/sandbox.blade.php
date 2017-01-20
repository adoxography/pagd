@extends('layout')

@section('header')
@stop

@section('content')
	<div id="root">
		<alg-datalist list="{{ App\Mode::select('name','id')->get()->toJson() }}"></alg-datalist>
	</div>
@stop

@section('footer')
@stop