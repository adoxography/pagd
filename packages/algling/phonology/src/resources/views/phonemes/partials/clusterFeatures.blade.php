@component('components.form.ajaxlist', [
	'name' => 'firstSegment',
	'label' => 'first segment',
	'uri' => '/autocomplete/phonemes',
	'with' => '{ language: language.id, type: "phoneme" }',
	'disabled' => '!language.id',
	'placeholder' => 'Make sure to select the language first',
	'rules' => 'datalist_exists',
	'delay' => 2000
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Cluster')
			{{ '{ "text": "'.str_replace('*', '', $phoneme->features->firstSegment->algoName).'", "id": "'.$phoneme->features->firstSegment_id.'" }' }}
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
	'delay' => 2000
])
	@slot('value')
		@if(isset($phoneme) && $phoneme->type == 'Cluster')
			{{ '{ "text": "'.str_replace('*', '', $phoneme->features->secondSegment->algoName).'", "id": "'.$phoneme->features->secondSegment_id.'" }' }}
		@endif
	@endslot
@endcomponent
