@extends('components.form.field')

@php
	$value = isset($value) ? $value : '';
@endphp

@section("{$name}_control")
	<alg-textarea
		value="{{ old($name, 'not found') !== 'not found' ? old($name) : $value }}"
		name="{{ $name }}"

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif

		@if(isset($height))
		:height="{{ $height }}"
		@endif
	></alg-textarea>
@endsection