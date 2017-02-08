{{-- Display the label if it was included --}}
@if(isset($label))
	@component('components.form.label')
	@slot('for')
			{{ $name or "" }}
	@endslot
		{{ $label }}
	@endcomponent
@endif

{{-- Display the select box --}}
<p class="control">
	<span class="select">
		<select name="{{ $name or '' }}">
			@foreach($options as $option)
				<option value="{{ $option['id'] }}" {{ (string)$option['id'] == $value ? "selected='selected'" : '' }}>{{ $option['name'] }}</option>
			@endforeach
		</select>
	</span>
</p>