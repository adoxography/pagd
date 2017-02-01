{{-- Display the label if it was included --}}
@if(isset($label))
	@component('components.form.label')
		@slot('for')
			{{ $name or "" }}
		@endslot
		{{ $label }}
	@endcomponent
@endif

{{-- Display the text field --}}
<p class="control">
	<input type="{{ $type or "text" }}" class="input" autocomplete="off" {{ isset($required) ? "required=\"true\"" : "" }} name="{{ $name or '' }}" id="{{ $id or (isset($name) ? $name : '') }}" value="{{ $value or "" }}" placeholder="{{ $placeholder or '' }}" />
</p>