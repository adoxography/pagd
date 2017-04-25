@extends('components.form.field')

@php
	$datalistRules = '';

	foreach(explode('|', $rules) as $rule) {
		if(strlen($datalistRules) > 0) {
			$datalistRules .= '|';
		}
		$datalistRules .= "datalist_{$rule}";
	}
@endphp

@section("{$name}_control")
	<alg-datalist
		v-model="{{ $name }}"
		:list="{{ $list }}"
		name="{{ $name }}"
		id="{{ $id or $name }}"
		initial="{{ old($name, 'not found') !== 'not found' ? old($name) : $value }}"
		:has-errors="errors.has('{{ $name }}')"

		@if(isset($rules))
		v-validate="'{{ $datalistRules }}'"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif
	></alg-datalist>
@endsection