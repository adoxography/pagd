@extends('components.form.field')

@section("outer-field")
@overwrite

@section("inner-field")
	<wysiwyg
		name="{{ $name }}"
        id="{{ $name }}-input"
        v-model="data.{{ $name }}"

		@isset($disabled)
		:disabled="{{ $disabled }}"
		@endisset
  ></wysiwyg>
@overwrite
