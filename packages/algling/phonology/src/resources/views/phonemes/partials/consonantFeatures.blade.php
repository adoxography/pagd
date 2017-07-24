{{-- Archiphoneme status --}}
@include('components.form.checkbox', [
    'name' => 'isArchiphoneme',
    'label' => 'archiphoneme',
    'model' => 'isArchiphoneme'
])

{{-- Place --}}
@component('components.form.datalist', [
	'name'  => 'place',
	'list'  => $places,
	'rules' => 'required|exists'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Consonant' && $phoneme->features->place)
			{{ $phoneme->features->place->name }}
		@endif
	@endslot
@endcomponent

{{-- Manner --}}
@component('components.form.datalist', [
	'name'  => 'manner',
	'list'  => $manners,
	'rules' => 'required|exists'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Consonant' && $phoneme->features->manner)
			{{ $phoneme->features->manner->name }}
		@endif
	@endslot
@endcomponent

{{-- Voicing --}}
@component('components.form.datalist', [
	'name'  => 'voicing',
	'list'  => $voicings,
	'rules' => 'exists',
	'placeholder' => 'Leave blank if no contrast'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Consonant' && $phoneme->features->voicing)
			{{ $phoneme->features->voicing->name }}
		@endif
	@endslot
@endcomponent

@include('components.form.checkbox', [
	'name' => 'isRounded',
	'label' => 'rounded',
	'checked' => isset($phoneme) && $phoneme->type == 'Consonant' ? $phoneme->features->isRounded : false
])

@include('components.form.checkbox', [
	'name' => 'isPalatalized',
	'label' => 'palatalized',
	'checked' => isset($phoneme) && $phoneme->type == 'Consonant' ? $phoneme->features->isPalatalized : false
])

@include('components.form.checkbox', [
	'name' => 'isGlottalized',
	'label' => 'glottalized',
	'checked' => isset($phoneme) && $phoneme->type == 'Consonant' ? $phoneme->features->isGlottalized : false
])