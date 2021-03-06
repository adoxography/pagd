<alg-form-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@isset($form)
		@if ($form->name)
			:init-morphemes="{{ $form->morphemesToJson() }}"
		@else
			:is-empty="true"
		@endif
	@endisset

	@if(isset($form))
	:old-sources="{{ $form->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<h4 class="subtitle is-4">Basic Details</h4>
		<div class="columns is-multiline">

			<div class="column is-12">
				<p class="control">
					<label class="radio">
						<input type="radio"
							   v-model="empty"
							   name="empty"
							   :value="false" />
						Form exists
					</label>
					<label class="radio">
						<input type="radio"
							   v-model="empty"
							   name="empty"
							   :value="true" />
						Form does not exist
					</label>
				</p>
			</div>

			<!-- Name -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'name',
					'label'       => 'surface form',
					'autofocus'   => true,
					'placeholder' => 'The form as written in a text',
					'disabled'    => 'empty',
					'typewriter'  => true
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

			<!-- Arguments -->
			<div class="column is-one-quarter">
				<label for="subject" class="label">Arguments</label>
				<div class="arguments field is-grouped">
					@component('components.form.datalist', [
						'name'       => 'subject',
						'list'       => $arguments,
						'rules'      => 'required|exists',
						'standalone' => true
					])
						@slot('value')
							@if(isset($form))
								{{ $form->structure->subject->name }}
							@endif
						@endslot
					@endcomponent

					@component('components.form.datalist', [
						'name'       => 'primaryObject',
						'list'       => $arguments,
						'rules'      => 'exists',
						'label'      => 'primary object',
						'standalone' => true
					])
						@slot('value')
							@if(isset($form))
								@if($form->structure->primaryObject)
									{{ $form->structure->primaryObject->name }}
								@endif
							@endif
						@endslot
					@endcomponent

					@component('components.form.datalist', [
						'name'       => 'secondaryObject',
						'list'       => $arguments,
						'rules'      => 'exists',
						'label'      => 'secondary object',
						'standalone' => true
					])
						@slot('value')
							@if(isset($form))
								@if($form->structure->secondaryObject)
									{{ $form->structure->secondaryObject->name }}
								@endif
							@endif
						@endslot
					@endcomponent
				</div>
				<span class="help is-danger"
					  v-show="errors.has('subject')"
					  v-text="errors.first('subject')">
				</span>
				<span class="help is-danger"
					  v-show="errors.has('primaryObject')"
					  v-text="errors.first('primaryObject')">
				</span>
				<span class="help is-danger"
					  v-show="errors.has('secondaryObject')"
					  v-text="errors.first('secondaryObject')">
				</span>
			</div>

			<!-- Class -->
			<div class="column is-one-quarter">
				@component('components.form.datalist', [
					'name'  => 'verbClass',
					'label' => 'class',
					'list'  => $classes,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->structure->formClass->name }}
						@else
							AI
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Order -->
			<div class="column is-one-quarter">
				@component('components.form.datalist', [
					'name'  => 'order',
					'list'  => $orders,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->structure->order->name }}
						@else
							Conjunct
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Mode -->
			<div class="column is-one-quarter">
				@component('components.form.datalist', [
					'name'  => 'mode',
					'list'  => $modes,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->structure->mode->name }}
						@else
							Indicative
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- Head -->
			<div class="column is-one-quarter">
				@include('components.form.select', [
					'name' => 'head',
					'options' => [
						'N/A' => '',
						'Subject' => 'subject',
						'Primary Object' => 'primaryObject',
						'Secondary Object' => 'secondaryObject'
					],
					'selected' => isset($form) ? $form->structure->head : ''
				])
			</div>

			<!-- isAbsolute -->
			<div class="column is-one-quarter">
				@include('components.form.select', [
					'name'    => 'isAbsolute',
					'label'   => 'Abs/Obj',
					'options' => [
						'N/A'       => '',
						'Absolute'  => 1,
						'Objective' => 0
					],
					'selected' => isset($form) ? $form->structure->isAbsolute : ''
				])
			</div>

			<!-- isNegative -->
			<div class="column is-narrow">
				@include('components.form.checkbox', [
					'name'    => 'isNegative',
					'label'   => 'negative',
					'value'   => 'true',
					'checked' => isset($form) && $form->structure->isNegative
				])
			</div>

			<!-- isDiminutive -->
			<div class="column is-narrow">
				@include('components.form.checkbox', [
					'name'    => 'isDiminutive',
					'label'   => 'diminutive',
					'value'   => 'true',
					'checked' => isset($form) && $form->structure->isDiminutive
				])
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Morphology</h4>

			<!-- phonemicForm -->
			@component('components.form.text', [
				'name'        => 'phonemicForm',
				'label'       => 'phonemic representation',
				'placeholder' => 'The Algonquianist phonemic representation (Leave blank if unknown or unclear)',
				'disabled'    => 'empty',
				'typewriter'  => true
			])
				@slot('value')
					@if(isset($form) && $form->phonemicForm)
						{{ str_replace('*', '', $form->phonemicForm) }}
					@endif
				@endslot
			@endcomponent

			<!-- morphemicForm -->
			@include('components.form.morpheme-tags', [
				'placeholder' => 'Look up or insert morphemes to add to the morphemic form',
				'language'    => 'language.id',
				'rules'       => 'hasTag:V'
			])

		<hr>
		<h4 class="subtitle is-4">Lineage</h4>
		<div class="columns">

			<!-- Parent -->
			<div class="column">
				@component('components.form.ajaxlist', [
					'name' => 'parent',
					'uri' => '/autocomplete/formParents',
					'with' => '{ language: language.id, type: "verb" }',
					'disabled' => '!language.id || empty',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'datalist_exists',
					'typewriter' => true
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
					'disabled' => '!parent.id || !language.id || empty',
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
					'placeholder' => 'Enter notes about this form\'s allomorphs',
					'disabled'    => 'empty'
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
</alg-form-form>
