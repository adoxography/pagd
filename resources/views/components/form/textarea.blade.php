@extends('components.form.field')

@section("{$name}_control")
	<alg-textarea value="{{ old('notes', 'not found') !== 'not found' ? old('notes') : $value }}"
				  name="{{ $name }}"

				  @if(isset($disabled))
				  :disabled="{{ $disabled }}"
				  @endif
	></alg-textarea>
@endsection