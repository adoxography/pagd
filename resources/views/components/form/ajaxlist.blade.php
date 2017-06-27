@extends('components.form.field')

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

		@if(isset($value) && strlen($value) > 0)
		:initial="{{ $value }}"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif
	></alg-ajaxlist>
@endsection	