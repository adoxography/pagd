<alg-example-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($example))
	:old-sources="{{ $example->sources }}"
	@endif
	>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns is-multiline">

			{{-- name --}}
			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'name',
					'autofocus' => true, 
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($example))
							{{ str_replace('*', '', $example->name) }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- language --}}
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'exists',
					'model' => 'language'
				])
					@slot('value')
						@if(isset($example))
							{{ $example->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@elseif(isset($form))
							{{ $form->language->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- form --}}
			<div class="column is-half">
				@component('components.form.ajaxlist', [
					'name' => 'form',
					'uri' => '/autocomplete/forms',
					'with' => '{ language: language.id }',
					'disabled' => '!language.id',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'datalist_exists',
				])
					@slot('value')
						@if(isset($example))
							{{ '{ "text": "'.str_replace('*', '', $example->form->present('unique')->then('language')).'", "id": "'.$example->form_id.'", "extra": "'.$example->morphemicForm.'" }' }}
						@elseif(isset($form))
							{{ '{ "text": "'.str_replace('*', '', $form->present('unique')->then('language')).'", "id": "'.$form->id.'", "extra": "'.$form->morphemicForm.'" }' }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- morphemicForm --}}
			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'morphemicForm',
					'label'     => 'morphemes',
					'rules'     => 'required|notHasMorpheme:V|notHasMorpheme:N',
					'model'     => 'morphemicForm',
					'disabled'  => '!form.extra'
				])
					@slot('value')
						@if(isset($example))
							{{ $example->morphemicForm }}
						@elseif(isset($form))
							{{ $form->morphemicForm }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'translation',
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($example))
							{{ $example->translation }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-half">
				@component('components.form.text', [
					'name'  => 'phonemicForm',
					'label' => 'phonemic representation'
				])
					@slot('value')
						@if(isset($example))
							{{ str_replace('*', '', $example->phonemicForm) }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-half">
				@component('components.form.ajaxlist', [
					'name' => 'parent',
					'uri' => '/autocomplete/exampleParents',
					'with' => '{ language: language.id }',
					'disabled' => '!language.id',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'datalist_exists'
				])
					@slot('value')
						@if(isset($example) && $example->parent)
							{{ '{ "text": "'.str_replace('*', '', $example->parent->present('unique')->then('language')).'", "id": "'.$example->parent_id.'" }' }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns">
			<div class="column">
				@component('components.form.textarea', [
					'name'        => 'publicNotes',
					'label'       => 'public notes',
					'placeholder' => 'Notes to be displayed to the public'
				])
					@slot('value')
						@if(isset($example))
							{{ $example->publicNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.textarea', [
					'name'        => 'privateNotes',
					'label'       => 'private notes',
					'placeholder' => 'Internal notes'
				])
					@slot('value')
						@if(isset($example))
							{{ $example->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-example-form>