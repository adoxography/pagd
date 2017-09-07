@php
	if(isset($parent)) {
		$languages = getArrayOfAllChildren($parent->language);
	}

	function getArrayOfAllChildren($language)
	{
		$array = collect();

		foreach($language->children as $child) {
			$array->push($child);

			$array = $array->concat(getArrayOfAllChildren($child));
		}

		$array = $array->unique('id');

		return $array;
	}
@endphp

<alg-reflex-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($reflex))
	:old-sources="{{ $reflex->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])

		<div class="columns">
			<div class="column">

				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists',
					'label' => 'reflex language',
					'autofocus' => true
				])
					@slot('value')
						@if(isset($reflex))
							{{	$reflex->reflex->language->name }}
						@elseif(isset($child))
							{{ $child->language->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column">
				<div class="field is-grouped">

					{{-- Parent --}}
					<div class="control is-expanded">
						@component('components.form.ajaxlist', [
							'name' => 'parent',
							'uri' => '/autocomplete/phonemeParents',
							'with' => '{ language: language.id }',
							'rules' => 'datalist_exists',
							'disabled' => '!language.id',
							'typewriter' => true
						])
							@slot('value')
								@if(isset($reflex))
									{{ '{ "text": "' . $reflex->parent->present()->with('language') . '", "id": "' . $reflex->parent_id . '" }' }}
								@elseif(isset($parent))
									{{ '{ "text": "' . $parent->present()->with('language') . '", "id": "' . $parent->id . '" }' }}
								@endif
							@endslot
						@endcomponent
					</div>

					{{-- Reflex --}}
					<div class="control is-expanded">
						@component('components.form.ajaxlist', [
							'name' => 'reflex',
							'uri' => '/autocomplete/phonemes',
							'with' => '{ language: language.id }',
							'disabled' => '!language.id',
							'rules' => 'datalist_exists',
							'typewriter' => true
						])
							@slot('value')
								@if(isset($reflex))
									{{ '{ "text": "' . $reflex->reflex->present() . '", "id": "' . $reflex->reflex_id . '" }' }}
								@elseif(isset($child))
									{{ '{ "text": "' . $child->present() . '", "id": "' . $child->id . '" }' }}
								@endif
							@endslot
						@endcomponent
					</div>
				</div>
			</div>
		</div>

		@component('components.form.text', [
			'name'      => 'environment',
		])
			@slot('value')
				@if(isset($reflex))
					{{ $reflex->environment }}
				@endif
			@endslot
		@endcomponent

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns">
			{{-- Public notes --}}
			<div class="column">
				@component('components.form.textarea', [
					'name' => 'publicNotes',
					'label' => 'public notes'
				])
					@slot('value')
						@if(isset($reflex))
							{{ $reflex->publicNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- Private notes --}}
			<div class="column">
				@component('components.form.textarea', [
					'name' => 'privateNotes',
					'label' => 'private notes'
				])
					@slot('value')
						@if(isset($reflex))
							{{ $reflex->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-reflex-form>
