{{-- Archiphoneme status --}}
@include('components.form.checkbox', [
    'name' => 'isArchiphoneme',
    'label' => 'archiphoneme',
    'model' => 'isArchiphoneme'
])

{{-- Height --}}
@component('components.form.datalist', [
	'name'  => 'height',
	'list'  => $heights,
    'activeRules' => 'fieldConstraints'
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
	'activeRules' => 'fieldConstraints'
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
	'rules' => 'exists',
	'placeholder' => 'Leave blank if no contrast'
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Vowel' && $phoneme->features->length)
			{{ $phoneme->features->length->name }}
		@endif
	@endslot
@endcomponent

<div class="field">
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
</div>
