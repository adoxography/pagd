<alg-rule-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($rule))
	:old-sources="{{ $rule->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns is-multiline">
			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'name',
					'autofocus' => true,
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->name }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.text', [
					'name'  => 'abv',
					'label' => 'abbreviation',
					'rules' => 'required'
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->abv }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'rule',
					'rules'       => 'required',
					'loadRequest' => false
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->rule }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'type',
					'list'  => $types,
					'rules' => 'required|exists'
				])
					@slot('value')
						@isset ($rule)
							{{ $rule->type }}
						@endisset
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
					'name'        => 'publicComments',
					'label'       => 'public notes'
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->publicComments }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.textarea', [
					'name'        => 'privateComments',
					'label'       => 'private notes'
				])
					@slot('value')
						@if(isset($rule))
							{{ $rule->privateComments }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-rule-form>
