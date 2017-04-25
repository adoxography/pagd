<alg-form-form
	inline-template
	v-cloak
	old-errors="{{ json_encode($errors->messages()) }}"

	@if(isset($form))
	old-sources="{{ $form->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'class' => 'box', 'visible' => true])
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

			<!-- Surface Form -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'surfaceForm',
					'label'       => 'surface form',
					'autofocus'   => true,
					'placeholder' => 'The form as written in a text',
					'disabled'    => 'empty'
				])
					@slot('value')
						@if(isset($form))
							{{ str_replace('*', '', $form->surfaceForm) }}
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
						@elseif(isset($presetLanguage))
							{{ $presetLanguage->name }}
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
								{{ $form->formType->subject->name }}
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
								@if($form->formType->primaryObject)
									{{ $form->formType->primaryObject->name }}
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
								@if($form->formType->secondaryObject)
									{{ $form->formType->secondaryObject->name }}
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
							{{ $form->formType->formClass->name }}
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
							{{ $form->formType->order->name }}
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
							{{ $form->formType->mode->name }}
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
						'secondaryObject' => 'secondaryObject'
					],
					'selected' => isset($form) ? $form->formType->head : ''
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
					'selected' => isset($form) ? $form->formType->isAbsolute : ''
				])
			</div>

			<!-- isNegative -->
			<div class="column is-narrow">
				@include('components.form.checkbox', [
					'name'    => 'isNegative',
					'label'   => 'negative',
					'value'   => 'true',
					'checked' => isset($form) && $form->formType->isNegative
				])
			</div>

			<!-- isDiminutive -->
			<div class="column is-narrow">
				@include('components.form.checkbox', [
					'name'    => 'isDiminutive',
					'label'   => 'diminutive',
					'value'   => 'true',
					'checked' => isset($form) && $form->formType->isDiminutive
				])
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Morphology</h4>
		<div class="columns">

			<!-- phoneticForm -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'phoneticForm',
					'label'       => 'phonemic representation',
					'placeholder' => 'The Algonquianist phonemic representation (Leave blank if unknown or unclear)',
					'disabled'    => 'empty'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->phoneticForm }}
						@endif
					@endslot
				@endcomponent
			</div>

			<!-- morphemicForm -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'        => 'morphemicForm',
					'label'       => 'morphemic form',
					'disabled'    => 'empty',
					'placeholder' => 'The morphemes, separated by hyphens (Leave blank if unknown or unclear)',
					'rules'       => 'hasVStem:true',
					'delay'       => 500
				])
					@slot('value')
						@if(isset($form))
							{{ $form->morphemicForm }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Lineage</h4>
		<div class="columns">

			<!-- Parent -->
			<div class="column">
				@component('components.form.ajaxlist', [
					'name' => 'parent',
					'uri' => '/autocomplete/formParents',
					'with' => 'language.id',
					'disabled' => '!language.id || empty',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'datalist_exists',
				])
					@slot('value')
						@if(isset($form))
							@if($form->parent)
								{{ '{ "text": "'.str_replace('*', '', $form->parent->uniqueNameWithLanguage).'", "id": "'.$form->parent_id.'" }' }}
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
					'selected' => isset($form) ? $form->changeType_id : ''
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
					'placeholder' => 'Enter notes about the usage of this form',
					'disabled'    => 'empty'
				])
					@slot('value')
						@if(isset($form))
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
						@if(isset($form))
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
					'name'        => 'comments',
					'placeholder' => 'Comments here will not be available to the public'
				])
					@slot('value')
						@if(isset($form))
							{{ $form->comments }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-form-form>