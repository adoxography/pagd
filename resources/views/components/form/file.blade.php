@extends('components.form.field')

@section("{$name}_control")
	<alg-file-upload
		name="{{ $name }}"

		@if (isset($multi) && $multi)
			:multi="true"
		@endif

		@if (isset($uploadHandler))
			@upload="{{ $uploadHandler }}($event)"
		@endif

			@if (is_string($accept))
				accept="{{ $accept }}"
			@elseif (is_array($accept))	
				accept="{{ array_toString($accept, ',') }}"
			@endif

	></alg-file-upload>
@endsection