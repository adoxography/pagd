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
<alg-ajaxlist v-model="{text: '', id: ''}" {!! isset($name) ? "name=$name" : "" !!} uri="{{ $uri }}" placeholder="{{ $placeholder or '' }}" listen="{{ $listen or "" }}" {{ isset($ref) ? "ref=$ref" : "" }}></alg-ajaxlist>