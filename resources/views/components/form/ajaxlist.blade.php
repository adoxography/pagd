@extends('components.form.field')

@php
	$initial = '';

	if(old($name, 'not found') !== 'not found' && strlen(old($name)) > 0) {
		$text = old($name);
		$id = old($name . '_id');
		$extra = '';

		if(old($name . '_extra')) {
			$extra = ', "extra": "' . old($name . '_extra') . '"';
		}
		$initial = "{ \"text\": \"$text\", \"id\": $id $extra }";
	}
@endphp

@section("{$name}_control")
	<alg-ajaxlist
		v-model="{{ $name }}"
		uri="{{ $uri }}"
		:with="{{ $with }}"
		name="{{ $name }}"
		id="{{ $id or $name }}"
		ref="{{ $name }}"

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif

		@if(isset($placeholder))
		placeholder="{{  $placeholder  }}"
		@endif

		@if(isset($rules))
		v-validate="'{{ $rules }}'"
		@endif

		@if(strlen($initial) > 0)
		:initial="{{ $initial }}"
		@elseif(isset($value) && strlen($value) > 0)
		:initial="{{ $value }}"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif

		@if(isset($on))
			@foreach ($on as $event => $action)
				{{ '@' . $event }}="{{ $action }}"
			@endforeach
		@endif
	></alg-ajaxlist>
@endsection
