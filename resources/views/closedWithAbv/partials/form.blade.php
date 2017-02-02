@component('components.form.text', ['label' => 'Abbreviation', 'name' => 'abv'])
	@slot('value')
		@if(old('abv'))
			{{ old('abv') }}
		@elseif($item)
			{{ $item->abv }}
		@endif
	@endslot
@endcomponent

@component('components.form.text', ['label' => 'Full name', 'name' => 'name'])
	@slot('value')
		@if(old('name'))
			{{ old('name') }}
		@elseif($item)
			{{ $item->name }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['label' => 'Description', 'name' => 'description'])
	@slot('value')
		@if(old('description'))
			{{ old('description') }}
		@elseif($item)
			{{ $item->description }}
		@endif
	@endslot
@endcomponent

<button type="submit" class="button is-primary">Submit</button>