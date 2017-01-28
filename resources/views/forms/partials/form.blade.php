@section('header')
	<script src = '/js/formUtil.js'></script>
@stop

{{-- Form Text Information --}}
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
		@component('components.form.datalist', ['name' => 'language_id', 'label' => 'Language', 'list' => $languages, 'required' => true, 'emit' => true])
			@slot('value')
				@if(old('language_id'))
					{{ old('language_id') }}
				@elseif(isset($presetLanguage))
					{{ $presetLanguage->id }}
				@elseif(isset($form))
					{{ $form->language_id }}
				@endif
			@endslot
		@endcomponent

	</div>
</div>

<div class="columns">
	<div class="column is-one-quarter">
		<label class="label">Arguments</label>
		<div class="arguments control is-grouped">
			@component('components.form.datalist', ['name' => 'subject_id', 'list' => $arguments, 'required' => true])
				@slot('value')
					@if(old('subject_id'))
						{{ old('subject_id') }}
					@elseif(isset($form))
						{{ $form->formType->subject_id }}
					@else
					 	1
					@endif
				@endslot
			@endcomponent

			@component('components.form.datalist', ['name' => 'primaryObject_id', 'list' => $arguments])
				@slot('value')
					@if(old('primaryObject_id'))
						{{ old('primaryObject_id') }}
					@elseif(isset($form))
						{{ $form->formType->primaryObject_id }}
					@endif
				@endslot
			@endcomponent

			@component('components.form.datalist', ['name' => 'secondaryObject_id', 'list' => $arguments])
				@slot('value')
					@if(old('secondaryObject_id'))
						{{ old('secondaryObject_id') }}
					@elseif(isset($form))
						{{ $form->formType->secondaryObject_id }}
					@endif
				@endslot
			@endcomponent
		</div>
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'class_id', 'label' => 'Class', 'list' => $classes, 'required' => true])
			@slot('value')
				@if(old('class_id'))
					{{ old('class_id') }}
				@elseif(isset($form))
					{{ $form->formType->class_id }}
				@else
				 	1 {{-- AI --}}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'order_id', 'label' => 'Order', 'list' => $orders, 'required' => true])
			@slot('value')
				@if(old('order_id'))
					{{ old('order_id') }}
				@elseif(isset($form))
					{{ $form->formType->order_id }}
				@else
				 	1 {{-- Conjunct --}}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-one-quarter">
		@component('components.form.datalist', ['name' => 'mode_id', 'label' => 'Mode', 'list' => $modes, 'required' => true])
			@slot('value')
				@if(old('mode_id'))
					{{ old('mode_id') }}
				@elseif(isset($form))
					{{ $form->formType->mode_id }}
				@else
				 	1 {{-- Indicative --}}
				@endif
			@endslot
		@endcomponent
	</div>
</div>

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

@component('components.form.sources')
	@slot('value')
		@if(old('sources'))
			{{-- {{ old('sources') }} --}}
		@elseif(isset($form))
			{{ $form->sources }}
		@endif
	@endslot
@endcomponent
{{-- <alg-sources value="{{ isset($form) ? $form->sources : "" }}"></alg-sources> --}}

<p class="control">
	<button type="submit" class="button is-primary">Submit</button>
</p>