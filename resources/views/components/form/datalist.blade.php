@extends('components.form.field')

@section("{$name}_control")
	<alg-datalist
		v-model="{{ $name }}"
		:list="{{ $list }}"
		name="{{ $name }}"
		id="{{ $id or $name }}"
		initial="{{ old($name, 'not found') !== 'not found' ? old($name) : $value }}"
		:has-errors="errors.has('{{ $name }}')"

		@if(isset($rules))
		v-validate="'{{ $rules }}'"
		@endif

		{{-- :classes="{'is-danger': errors.has('{{ $name }}')}" --}}
	></alg-datalist>
@endsection