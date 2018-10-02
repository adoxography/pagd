@php

$languages = App\Language::all();
$types = App\Models\Nominals\ParadigmType::all();

@endphp

<alg-paradigm-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(isset($paradigm))
	:old-sources="{{ $paradigm->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns">
			<div class="column is-half">
			
				{{-- Language --}}
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists',
					'autofocus' => true
				])
					@slot('value')
						@if(isset($paradigm))
							{{ $paradigm->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent

				{{-- Type --}}
				@component('components.form.datalist', [
					'name'  => 'paradigmType',
					'label' => 'type',
					'list'  => $types,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($paradigm))
							{{ $paradigm->type->name }}
						@endif
					@endslot
				@endcomponent

				{{-- Name --}}
				@component('components.form.text', [
					'name' => 'name'
				])
					@slot('value')
						@if(isset($paradigm))
							{{ $paradigm->name }}
						@endif
					@endslot
				@endcomponent

			</div>
		</div>

		<hr>
		<alg-sources v-model="sources"></alg-sources>
	@endcomponent
</alg-paradigm-form>
