@php

$languages = App\Language::all();
$pronominalFeatures = Algling\Nominals\Models\PronominalFeature::all();
$nominalFeatures = Algling\Nominals\Models\NominalFeature::all();
$paradigms = Algling\Nominals\Models\Paradigm::with('type')->get();
$changeTypes = App\ChangeType::all();

@endphp

<alg-nominal-form-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	:pronominal-features="{{ $pronominalFeatures }}"
	:nominal-features="{{ $nominalFeatures }}"
	:paradigms="{{ $paradigms }}"

	@if(isset($form))
	:old-sources="{{ $form->sources }}"
	@endif

	@if(old('paradigm', 'not found') !== 'not found')
		old-paradigm="{{ old('paradigm') }}"
	@elseif(isset($form))
		old-paradigm="{{ $form->structure->paradigm->name }}"
	@endif

	@if(old('pronominalFeature', 'not found') !== 'not found')
		old-pronominal-feature="{{ old('pronominalFeature') }}"
	@elseif(isset($form) && $form->structure->pronominalFeature)
		old-pronominal-feature="{{ $form->structure->pronominalFeature->name }}"
	@endif

	@if(old('nominalFeature', 'not found') !== 'not found')
		old-nominal-feature="{{ old('nominalFeature') }}"
	@elseif(isset($form) && $form->structure->nominalFeature)
		old-nominal-feature="{{ $form->structure->nominalFeature->name }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<!-- Name -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'name',
					'label'       => 'surface form',
					'autofocus'   => true,
					'placeholder' => 'The form as written in a text',
					'rules'       => 'required'
				])
					@slot('value')
						@if(isset($form) && $form->name)
							{{ str_replace('*', '', $form->name) }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Language -->
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-half">
				@component('components.form.datalist', [
					'name' => 'paradigm',
					'list' => 'filteredParadigms',
					'rules' => 'required|exists',
					'disabled' => 'filteredParadigms.length == 0'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->structure->paradigm->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-one-quarter">
				<div class="field">
					<label for="pronominalFeature" class="label">
						Pronominal Feature
					</label>

					<div class="control">
						<alg-datalist
							v-model="pronominalFeature"
							:list="pronominalFeatures"
							name="pronominalFeature"
							id="pronominalFeature"
							:has-errors="errors.has('pronominalFeature')"
							v-validate="'datalist_exists'"
							data-vv-as="pronominal feature"
							:disabled="!paradigmHasPronominalFeature()"
							ref="pronominalFeature"
							initial="{{ old('pronominalFeature', 'not found') !== 'not found' ? old('pronominalFeature') : (isset($form) && $form->structure->pronominalFeature ? $form->structure->pronominalFeature->name : '') }}"
						></alg-datalist>
					</div>
					<span
						class="help is-danger"
						v-show="errors.has('pronominalFeature')"
						v-text="errors.first('pronominalFeature')"
					></span>
				</div>
			</div>

			<div class="column is-one-quarter">
				<div class="field">
					<label for="nominalFeature" class="label">
						Nominal Feature
					</label>

					<div class="control">
						<alg-datalist
							v-model="nominalFeature"
							:list="nominalFeatures"
							name="nominalFeature"
							id="nominalFeature"
							:has-errors="errors.has('nominalFeature')"
							v-validate="'datalist_exists'"
							data-vv-as="nominal feature"
							:disabled="!paradigmHasNominalFeature()"
							ref="nominalFeature"
							initial="{{ old('nominalFeature', 'not found') !== 'not found' ? old('nominalFeature') : (isset($form) && $form->structure->nominalFeature ? $form->structure->nominalFeature->name : '') }}"
						></alg-datalist>
					</div>
					<span
						class="help is-danger"
						v-show="errors.has('nominalFeature')"
						v-text="errors.first('nominalFeature')"
					></span>
				</div>
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Morphology</h4>

			<!-- phonemicForm -->
			@component('components.form.text', [
				'name'        => 'phonemicForm',
				'label'       => 'phonemic representation',
				'placeholder' => 'The Algonquianist phonemic representation (Leave blank if unknown or unclear)'
			])
				@slot('value')
					@if(isset($form) && $form->phonemicForm)
						{{ str_replace('*', '', $form->phonemicForm) }}
					@endif
				@endslot
			@endcomponent

			<!-- morphemes -->
			<div class="field">
				<label for="morphemes" class="label">Morphemes</label>
				<alg-morpheme-tag-input
					source="/autocomplete/morphemes"
					name="morphemes"
					id="morphemes"
					:allow-duplicates="true"
					:allow-new="true"
					:allow-periods="false"
					:allow-hyphens="false"
					@input="morphemesUpdated($event)"
					placeholder="Look up or insert morphemes to add to the morphemic form"
					:classes="{'is-danger': errors.has('morphemes')}"
					:language="language.id"
					ref="morphemes"

					@if(isset($form))
					:tags="{{ $form->morphemesToJson() }}"
					@endif
				></alg-morpheme-tag-input>
				<span class="help is-danger"
					  v-show="errors.has('morphemes')"
					  v-text="errors.first('morphemes')">
				</span>
			</div>

			@component('components.form.text', [
				'name' => 'translation',
				'placeholder' => 'Required only for stemless forms',
				'rules' => '',
				'disabled' => '!translationRequired'
			])
				@slot('value')
					@if(isset($form) && $form->isStemless() && $form->examples->count() > 0)
						{{ $form->examples->first()->translation }}
					@endif
				@endslot
			@endcomponent

		<hr>
		<h4 class="subtitle is-4">Lineage</h4>
		<div class="columns">

			<!-- Parent -->
			<div class="column">
				@component('components.form.ajaxlist', [
					'name' => 'parent',
					'uri' => '/autocomplete/formParents',
					'with' => '{ language: language.id, type: "nominal" }',
					'disabled' => '!language.id',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'datalist_exists',
				])
					@slot('value')
						@if(isset($form))
							@if($form->parent)
								{{ '{ "text": "'.str_replace('*', '', $form->parent->present('unique')->then('language')).'", "id": "'.$form->parent_id.'" }' }}
							@endif
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Change Type -->
			<div class="column">
				@include('components.form.select', [
					'name' => 'changeType_id',
					'label' => 'change type',
					'disabled' => '!parent.id || !language.id',
					'options' => $changeTypes,
					'selected' => isset($form) && $form->changeType_id ? $form->changeType_id : ''
				])
			</div>
		</div>

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns is-multiline">

			<!-- Usage Notes -->
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'usageNotes',
					'label'       => 'usage notes',
					'placeholder' => 'Enter notes about the usage of this form'
				])
					@slot('value')
						@if(isset($form) && $form->usageNotes)
							{{ $form->usageNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Allomorphy Notes -->
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'allomorphyNotes',
					'label'       => 'allomorphy',
					'placeholder' => 'Enter notes about this form\'s allomorphs'
				])
					@slot('value')
						@if(isset($form) && $form->allomorphyNotes)
							{{ $form->allomorphyNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Historical Notes -->
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'historicalNotes',
					'label'       => 'historical notes',
					'placeholder' => 'Enter historical information about this form'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->historicalNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Comments -->
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'privateNotes',
					'label'       => 'Comments',
					'placeholder' => 'Comments here will not be available to the public'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-nominal-form-form>
