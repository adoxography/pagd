<alg-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($variable))
	:old-sources="{{ $variable->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="field">
			<alg-tabs>
				<alg-tab name="Basic details" selected="selected">
					<div class="columns">
						<div class="column is-8">
							@component('components.form.text', [
								'name'      => 'name',
								'autofocus' => true,
								'rules'     => 'required'
							])
								@slot('value')
									@if(isset($variable))
										{{ $variable->name }}
									@endif
								@endslot
							@endcomponent

							@include('components.form.select', [
								'name' => 'type_id',
								'label' => 'type',
								'options' => $types,
								'selected' => isset($variable) ? $variable->type_id : ''
							])

							@component('components.form.text', [
								'name'      => 'description',
								'rules'     => 'required'
							])
								@slot('value')
									@if(isset($variable))
										{{ $variable->description }}
									@endif
								@endslot
							@endcomponent
						</div>
						<div class="column">
							<alg-value-input
								:list="{{ $values }}"
								@if(isset($variable))
									:initial="{{ $variable->values }}"
								@endif
							></alg-value-input>
						</div>
					</div>
				</alg-tab>
				<alg-tab name="Essay">
					<div class="field">
						@component('components.form.textarea', [
							'name'   => 'essay',
							'height' => 500
						])
							@slot('value')
								@if(isset($variable))
									{{ $variable->essay }}
								@endif
							@endslot
						@endcomponent
					</div>
				</alg-tab>
			</alg-tabs>
		</div>
	@endcomponent
</alg-form>
