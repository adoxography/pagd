<h4 class="subtitle is-4">Basic Details</h4>
<div class="columns">
	<div class="column is-half">

		{{-- Surface form field --}}
		@component('components.form.text', ['name' => 'surfaceForm', 'label' => 'Surface Form', 'placeholder' => 'The form as written in a text', 'required' => 'required'])
			@slot('value')
				@if(old('surfaceForm'))
					{{ old('surfaceForm') }}
				@elseif(isset($form))
					{{ $form->surfaceForm }}
				@endif
			@endslot
		@endcomponent

	</div>
	<div class="column is-half">

		{{-- Language field --}}
		@component('components.form.datalist', ['name' => 'language', 'label' => 'Language', 'list' => $languages, 'required' => true, 'emit' => true])
			@slot('value')
				@if(old('language'))
					{{ old('language') }}
				@elseif(isset($presetLanguage))
					{{ $presetLanguage->name }}
				@elseif(isset($form))
					{{ $form->language->name }}
				@endif
			@endslot
		@endcomponent

	</div>
</div>

<div class="columns is-multiline">
	<div class="column is-one-quarter">
		<label class="label">Arguments</label>
		<div class="arguments control is-grouped">
			@component('components.form.datalist', ['name' => 'subject', 'list' => $arguments, 'required' => true])
				@slot('value')
					@if(old('subject'))
						{{ old('subject') }}
					@elseif(isset($form))
						{{ $form->formType->subject->name }}
					@else
					 	1
					@endif
				@endslot
			@endcomponent

			@component('components.form.datalist', ['name' => 'primaryObject', 'list' => $arguments])
				@slot('value')
					@if(old('primaryObject'))
						{{ old('primaryObject') }}
					@elseif(isset($form) && isset($form->formType->primaryObject))
						{{ $form->formType->primaryObject->name }}
					@endif
				@endslot
			@endcomponent

			@component('components.form.datalist', ['name' => 'secondaryObject', 'list' => $arguments])
				@slot('value')
					@if(old('secondaryObject'))
						{{ old('secondaryObject') }}
					@elseif(isset($form) && isset($form->formType->secondaryObject))
						{{ $form->formType->secondaryObject->name }}
					@endif
				@endslot
			@endcomponent
		</div>
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'class', 'label' => 'Class', 'list' => $classes, 'required' => true])
			@slot('value')
				@if(old('class'))
					{{ old('class') }}
				@elseif(isset($form))
					{{ $form->formType->formClass->name }}
				@else
				 	AI
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'order', 'label' => 'Order', 'list' => $orders, 'required' => true])
			@slot('value')
				@if(old('order'))
					{{ old('order') }}
				@elseif(isset($form))
					{{ $form->formType->order->name }}
				@else
				 	Conjunct
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'mode', 'label' => 'Mode', 'list' => $modes, 'required' => true])
			@slot('value')
				@if(old('mode'))
					{{ old('mode') }}
				@elseif(isset($form))
					{{ $form->formType->mode->name }}
				@else
				 	Indicative
				@endif
			@endslot
		@endcomponent
	</div>

	<div class="column is-one-quarter">
		@component('components.form.select', ['name' => 'isAbsolute', 'label' => 'Abs/Erg', 'options' => [
			['id' => "null", 'name' => 'N/A'],
			['id' => "1", 'name' => 'Absolute'],
			['id' => "0", 'name' => 'Objective']
		]])
			@slot('value')
				@if(old('isAbsolute'))
					{{ old('isAbsolute') }}
				@elseif(isset($form))
					{{ $form->formType->isAbsolute }}
				@endif
			@endslot
			
		@endcomponent
	</div>

	<div class="column is-narrow">
		@component('components.form.checkbox', ['name' => 'isNegative', 'label' => 'Negative', 'value' => true])
			@slot('checked')
				@if(old('isNegative'))
					{{ old('isNegative') }}
				@elseif(isset($form))
					{{$form->formType->isNegative}}
				@endif
			@endslot
		@endcomponent
	</div>

	<div class="column is-narrow">
		@component('components.form.checkbox', ['name' => 'isDiminutive', 'label' => 'Diminutive', 'value' => true])
			@slot('checked')
				@if(old('isDiminutive'))
					{{ old('isDiminutive') }}
				@elseif(isset($form))
					{{$form->formType->isDiminutive}}
				@endif
			@endslot
		@endcomponent
	</div>
</div>

<hr>

<h4 class="subtitle is-4">Morphology</h3>
<div class="columns">
	<div class="column is-half">
	@component('components.form.text', ['name' => 'phoneticForm', 'label' => 'Phonemic Representation', 'placeholder' => 'The Algonquianist phonemic transcription (Leave blank if unknown or unclear)'])
		@slot('value')
			@if(old('phoneticForm'))
				{{ old('phoneticForm') }}
			@elseif(isset($form))
				{{ $form->phoneticForm }}
			@endif
		@endslot
	@endcomponent
	</div>

	<div class="column is-half">
		@component('components.form.text', ['name' => 'morphemicForm', 'label' => 'Morphemes', 'placeholder' => 'The morphemes, separated by hyphens (Leave blank if unknown or unclear)'])
			@slot('value')
				@if(old('morphemicForm'))
					{{ old('morphemicForm') }}
				@elseif(isset($form))
					{{ $form->morphemicForm }}
				@endif
			@endslot
		@endcomponent
	</div>
</div>

<hr>

<h4 class="subtitle is-4">Notes</h4>
@component('components.form.textarea', ['name' => 'usageNotes', 'label' => 'Usage Notes'])
	@slot('placeholder')
		Enter notes about the usage of this form
	@endslot
	@slot('value')
		@if(old('usageNotes'))
			{{ old('usageNotes') }}
		@elseif(isset($form))
			{{ $form->usageNotes }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['name' => 'allomorphyNotes', 'label' => 'Allomorphy Notes'])
	@slot('placeholder')
		Enter notes about this form's allomorphs
	@endslot
	@slot('value')
		@if(old('allomorphyNotes'))
			{{ old('allomorphyNotes') }}
		@elseif(isset($form))
			{{ $form->allomorphyNotes }}
		@endif
	@endslot
@endcomponent

@component('components.form.ajaxlist', ['name' => 'parent', 'label' => 'Parent', 'uri' => '/autocomplete/formParents', 'listen' => 'language_id'])	
	@slot('placeholder')
		After selecting a language, all of its ancestors' forms will be available as options
	@endslot
	@slot('text')
		@if(old('parent'))
			{{ old('parent') }}
		@elseif(isset($form) && $form->parent)
			{{ $form->parent->surfaceForm }} ({{ $form->parent->language->name }})
		@endif
	@endslot
	@slot('value')
		@if(old('parent_id'))
			{{ old('parent_id') }}
		@elseif(isset($form) && $form->parent)
			{{ $form->parent_id }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['name' => 'historicalNotes', 'label' => 'Historical Notes'])
	@slot('placeholder')
		Enter historical information about this form
	@endslot
	@slot('value')
		@if(old('historicalNotes'))
			{{ old('historicalNotes') }}
		@elseif(isset($form))
			{{ $form->historicalNotes }}
		@endif
	@endslot
@endcomponent

@component('components.form.textarea', ['name' => 'comments', 'label' => 'Private Comments'])
	@slot('placeholder')
		Comments here will not be available to the public
	@endslot
	@slot('value')
		@if(old('comments'))
			{{ old('comments') }}
		@elseif(isset($form))
			{{ $form->comments }}
		@endif
	@endslot
@endcomponent

<hr>
<h4 class="subtitle is-4">Sources</h4>
@component('components.form.sources')
	@slot('value')
		@if(old('sources'))
			{{ json_encode(old('sources')) }}
		@elseif(isset($form))
			{{ $form->sources }}
		@endif
	@endslot
@endcomponent

<p class="control">
	<button type="submit" class="button is-primary">Submit</button>
</p>