{{-- Height --}}
@component('components.form.datalist', [
	'name'  => 'height',
	'list'  => $heights,
	'rules' => 'required|exists'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Vowel')
			{{ $phoneme->features->height->name }}
		@endif
	@endslot
@endcomponent

{{-- Backness --}}
@component('components.form.datalist', [
	'name'  => 'backness',
	'list'  => $backnesses,
	'rules' => 'required|exists'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Vowel')
			{{ $phoneme->features->backness->name }}
		@endif
	@endslot
@endcomponent

{{-- Length --}}
@component('components.form.datalist', [
	'name'  => 'length',
	'list'  => $lengths,
	'rules' => 'required|exists',
	'placeholder' => 'Leave blank if no contrast'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Vowel' && $phoneme->features->length)
			{{ $phoneme->features->length->name }}
		@endif
	@endslot
@endcomponent

{{-- Nasal --}}
@include('components.form.checkbox', [
	'name' => 'isNasal',
	'label' => 'nasal',
	'checked' => isset($phoneme) && $phoneme->type == 'Vowel' ? $phoneme->features->isNasal : false
])

{{-- Rounded --}}
@include('components.form.checkbox', [
	'name' => 'isRounded',
	'label' => 'rounded',
	'checked' => isset($phoneme) && $phoneme->type == 'Vowel' ? $phoneme->features->isRounded : false
])