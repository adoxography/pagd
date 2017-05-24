@extends('components.form.field')

@php
	$datalistRules = '';
	$initial = '';

	foreach(explode('|', $rules) as $rule) {
		if(strlen($datalistRules) > 0) {
			$datalistRules .= '|';
		}
		$datalistRules .= "datalist_{$rule}";
	}

	// If there was old data, use that
	if(old($name, 'not found') !== 'not found') {
		$initial = old($name);

	// If the data came in the request, use that
	} elseif(request()->$name && (!isset($loadRequest) || $loadRequest)) {

		// If the data in the request is a model with a name column, use whatever is in the name column
		if(method_exists(request()->$name, 'getTable') && Schema::hasColumn(request()->$name->getTable(), 'name')) {
			$initial = request()->$name->name;

		// Otherwise, just use what came in the request
		} else {
			$initial = request()->$name;
		}

	// Otherwise, use what was provided to the component
	} elseif(isset($value)) {
		$initial = $value;
	}
@endphp

@section("{$name}_control")
	<alg-datalist
		v-model="{{ $name }}"
		:list="{{ $list }}"
		name="{{ $name }}"
		id="{{ $id or $name }}"
		initial="{{ $initial }}"
		:has-errors="errors.has('{{ $name }}')"
		ref="{{ $name }}"

		@if(isset($model))
		v-model="{{ $model }}"
		@endif

		@if(isset($rules))
		v-validate="'{{ $datalistRules }}'"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif

		@if(isset($autofocus))
		:autofocus="{{ $autofocus }}"
		@endif

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif
	></alg-datalist>
@endsection