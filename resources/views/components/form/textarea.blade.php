@extends('components.form.field')

@php
	$value = isset($value) ? $value : '';
@endphp

@section("{$name}_control")
	<wysiwyg
		value="{{ old($name, 'not found') !== 'not found' ? old($name) : $value }}"
		name="{{ $name }}"

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif
  ></wysiwyg>
@endsection
