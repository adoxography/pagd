@extends('components.form.field')

@section("{$name}_control")
	<alg-textarea value="{{ old('notes', 'not found') !== 'not found' ? old('notes') : $value }}"
				  name="{{ $name }}">
	</alg-textarea>
@endsection