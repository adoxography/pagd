{{-- Display the label if it was included --}}
@if(isset($label))
	@component('components.form.label')
		@slot('for')
			{{ $name or "" }}
		@endslot
		{{ $label }}
	@endcomponent
@endif

{{-- Display the textbox --}}
<p class="control">
	<textarea class="textarea" name="{{ $name or '' }}" id="{{ $id or (isset($name) ? $name : '') }}" placeholder="{{ $placeholder or '' }}">{{ $value or "" }}</textarea>
</p>