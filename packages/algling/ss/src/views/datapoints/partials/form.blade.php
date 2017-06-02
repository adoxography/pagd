<alg-datapoint-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"
	:variables="{{ $variables }}"

	@if(isset($datapoint))
	initial-value="{{ $datapoint->value_id }}"
	@endif

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($datapoint))
	:old-sources="{{ $datapoint->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])

		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns">
			<div class="column">
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($datapoint))
							{{ $datapoint->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.datalist', [
					'name'  => 'variable',
					'list'  => $variables,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($datapoint))
							{{ $datapoint->variable->name }}
						@elseif(isset($variable))
							{{ $variable->name }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column">
				<div class="field">
					<label class="label" for="value_id">Value</label>
					<div class="control">
						<span class="select" :class="{ 'is-danger': errors.has('value') }">
							<select name="value_id" id="value_id" v-validate="'required'" v-model="selectedValue">
								<option value="">Select a value</option>
								<option v-for="value in values" :value="value.id">
									@{{ value.name }}
								</option>
							</select>
						</span>
					</div>
					<span
						class="help is-danger"
						v-show="errors.has('value')"
						v-text="errors.first('value')"
					></span>
				</div>
			</div>
		</div>
		@component('components.form.textarea', [
			'name' => 'note'
		])
			@slot('value')
				@if(isset($datapoint))
					{{ $datapoint->note }}
				@endif
			@endslot
		@endcomponent

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		{{-- <h4 class="subtitle is-4">Notes</h4> --}}
		@component('components.form.textarea', [
			'name' => 'comments'
		])
			@slot('value')
				@if(isset($datapoint))
					{{ $datapoint->comments }}
				@endif
			@endslot
		@endcomponent

	@endcomponent
</alg-datapoint-form>