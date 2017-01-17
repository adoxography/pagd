@extends('layout')

@section('header')
	{{-- <script src="js/vendor.js"></script> --}}
<!-- 	<script src="https://unpkg.com/vue/dist/vue.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.js"></script> -->
    <style>
    </style>
@stop

@section('content')
	<div id="root">
		<test-component classes="{{ App\FormClass::all()->toJson() }}" arguments="{{ App\Argument::all()->toJson() }}" modes="{{ App\Mode::all()->toJson() }}" orders="{{ App\Order::all()->toJson() }}"></test-component>
	</div>
@stop

@section('footer')
{{-- 
	<script src = '/js/sandbox.js'></script> --}}
@stop