<div class="columns is-multiline">
	<div class="column is-half">
		{{-- Name field --}}
		@component('components.form.text', ['required' => true, 'label' => 'Name', 'name' => 'name'])
			@slot('value')
				@if(old('name'))
					{{ old('name') }}
				@elseif(isset($language))
					{{ $language->name }}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-half">
		{{-- Alternate names field --}}
		@component('components.form.text', ['label' => 'Alternate Names', 'name' => 'alternateNames'])
			@slot('value')
				@if(old('alternateNames'))
					{{ old('alternateNames') }}
				@elseif(isset($language))
					{{ $language->alternateNames }}
				@endif
			@endslot
		@endcomponent
	</div>

	<div class="column is-half">
		{{-- Group field --}}
		@component('components.form.datalist', ['name' => 'group', 'label' => 'Group', 'list' => $groups, 'required' => true])
			@slot('value')
				@if(old('group'))
					{{ old('group') }}
				@elseif(isset($presetParent))
					{{ $presetParent->group->name }}
				@elseif(isset($language))
					{{ $language->group->name }}
				@else
				 	Central
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-half">
		{{-- Parent field --}}
		@component('components.form.datalist', ['name' => 'parent', 'label' => 'Parent', 'list' => $parents, 'required' => true])
			@slot('value')
				@if(old('parent'))
					{{ old('parent') }}
				@elseif(isset($presetParent))
					{{ $presetParent->name }}
				@elseif(isset($language) && $language->parent)
					{{ $language->parent->name }}
				@else
				 	Proto-Algonquian
				@endif
			@endslot
		@endcomponent
	</div>

	<div class="column is-2">
		{{-- ISO field --}}
		@component('components.form.text', ['name' => 'iso', 'label' => 'ISO', 'required' => true,])
			@slot('value')
				@if(old('iso'))
					{{ old('iso') }}
				@elseif(isset($language))
					{{ $language->iso }}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-2">
		{{-- Algonquianist Code field --}}
		@component('components.form.text', ['name' => 'algoCode', 'label' => 'Algonquianist Code', 'required' => true,])
			@slot('value')
				@if(old('algoCode'))
					{{ old('algoCode') }}
				@elseif(isset($language))
					{{ $language->algoCode }}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-2"></div>
	<div class="column is-half">
		@component('components.form.radiogroup', ['name' => 'reconstructed', 'list' => [['label' => 'Attested',	'value' => 0], ['label' => 'Reconstructed',	'value' => 1]],
			'checked' => (old('reconstructed') ? old('reconstructed') : (isset($language) ? $language->reconstructed : 0))])
		@endcomponent
	</div>
</div>

@component('components.form.textarea', ['name' => 'notes', 'label' => 'Notes'])
	@slot('value')
		@if(old('notes'))
			{{ old('notes') }}
		@elseif(isset($language))
			{{ $language->notes }}
		@endif
	@endslot
@endcomponent

<button type="submit" class="button is-primary">Submit</button>