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
<alg-ajaxlist initvalue="{{ $value }}" inittext="{{ $text }}" {!! isset($name) ? "name=$name" : "" !!} uri="{{ $uri }}" placeholder="{{ $placeholder or '' }}"></alg-ajaxlist>