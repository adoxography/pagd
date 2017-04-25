@extends('components.form.field')

@section("{$name}_control")
	<input
		type="text"
		class="input"
		value="{{ old($name, 'not found') !== 'not found' ? old($name) : $value }}"
		autocomplete="off"
		name="{{ $name }}"
		id="{{ $id or $name }}"
		:class="{'is-danger': errors.has('{{ $name }}')}"

		@if(isset($autofocus) && !old($name) && strlen($value) == 0)
		autofocus="autofocus"
		@endif

		@if(isset($placeholder))
		placeholder="{{ $placeholder }}"
		@endif

		@if(isset($rules))
		v-validate="'{{ $rules }}'"
		@endif

		@if(isset($delay))
		data-vv-delay="{{ $delay }}"
		@endif

		@if(isset($label))
		data-vv-as="{{ $label }}"
		@endif

		@if(isset($disabled))
		:disabled="{{ $disabled }}"
		@endif
	/>
@endsection