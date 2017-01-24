{{-- Display the label if it was included --}}
@if(isset($label))
	@component('components.form.label')
		@slot('for')
			{{ $name }}
		@endslot
		{{ $label }}
	@endcomponent
@endif

{{-- Display the datalist --}}
<alg-datalist init="{{ $value }}" list="{{ $list }}" name="{{ $name }}" {{ isset($required) ? "required=\"true\"" : "" }}></alg-datalist>