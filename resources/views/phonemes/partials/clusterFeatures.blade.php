@component('components.form.ajaxlist', [
	'name' => 'firstSegment',
	'label' => 'first segment',
	'uri' => '/autocomplete/phonemes',
	'with' => '{ language: language.id, type: "phoneme" }',
	'disabled' => '!language.id',
	'placeholder' => 'Make sure to select the language first',
	'rules' => 'datalist_exists',
	'delay' => 2000,
	'typewriter' => true
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Cluster')
			{{ '{ "text": "'.str_replace('*', '', $phoneme->features->firstSegment->algo_name).'", "id": "'.$phoneme->features->first_segment_id.'" }' }}
		@endif
	@endslot
@endcomponent

@component('components.form.ajaxlist', [
	'name' => 'secondSegment',
	'label' => 'second segment',
	'uri' => '/autocomplete/phonemes',
	'with' => '{ language: language.id, type: "phoneme" }',
	'disabled' => '!language.id',
	'placeholder' => 'Make sure to select the language first',
	'rules' => 'datalist_exists',
	'delay' => 2000,
	'typewriter' => true
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Cluster')
			{{ '{ "text": "'.str_replace('*', '', $phoneme->features->secondSegment->algo_name).'", "id": "'.$phoneme->features->second_segment_id.'" }' }}
		@endif
	@endslot
@endcomponent
