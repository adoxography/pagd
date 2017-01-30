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
		 	Plains
		@endif
	@endslot
@endcomponent

{{-- Parent field --}}
@component('components.form.datalist', ['name' => 'parent', 'label' => 'Parent', 'list' => $parents, 'required' => true])
	@slot('value')
		@if(old('parent'))
			{{ old('parent') }}
		@elseif(isset($presetParent))
			{{ $presetParent->name }}
		@elseif(isset($language))
			{{ $language->parent->name }}
		@else
		 	Proto-Algonquian
		@endif
	@endslot
@endcomponent

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

<button type="submit" class="button is-primary">Submit</button>