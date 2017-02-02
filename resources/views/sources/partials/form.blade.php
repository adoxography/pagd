@component('components.form.text', ['label' => 'Short', 'name' => 'short'])
	@slot('value')
		@if(old('short'))
			{{ old('short') }}
		@elseif(isset($source))
			{{ $source->short }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['label' => 'Long', 'name' => 'long'])
	@slot('value')
		@if(old('long'))
			{{ old('long') }}
		@elseif(isset($source))
			{{ $source->long }}
		@endif
	@endslot
@endcomponent

@component('components.form.text', ['type' => 'url', 'label' => 'URL', 'name' => 'url'])
	@slot('value')
		@if(old('url'))
			{{ old('url') }}
		@elseif(isset($source))
			{{ $source->url }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['label' => 'Notes', 'name' => 'notes'])
	@slot('value')
		@if(old('notes'))
			{{ old('notes') }}
		@elseif(isset($source))
			{{ $source->notes }}
		@endif
	@endslot
@endcomponent

<button type="submit" class="button is-primary">Submit</button>