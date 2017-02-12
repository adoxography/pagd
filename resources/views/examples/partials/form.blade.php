<alg-example-form inline-template>
	<div>
	<div class="columns is-multiline">

		{{-- Name field --}}
		<div class="column is-half">
			@component('components.form.text', ['name' => 'name', 'label' => 'Surface Form', 'required' => true])
				@slot('value')
					@if(old('name'))
						{{ old('name') }}
					@elseif(isset($example))
						{{ $example->name }}
					@endif
				@endslot
			@endcomponent
		</div>

		{{-- Language field --}}
		<div class="column is-half">
			@component('components.form.datalist', ['name' => 'language', 'label' => 'Language', 'list' => $languages, 'required' => true, 'emit' => true])
				@slot('value')
					@if(old('language'))
						{{ old('language') }}
					@elseif(isset($presetLanguage))
						{{ $presetLanguage->name }}
					@elseif(isset($presetForm))
						{{ $presetForm->language->name }}
					@elseif(isset($example))
						{{ $example->language->name }}
					@endif
				@endslot
			@endcomponent
		</div>

		{{-- Form field --}}
		<div class="column is-half">
			@component('components.form.ajaxlist', ['name' => 'form', 'label' => 'Form', 'uri' => '/autocomplete/forms', 'listen' => 'language_id', 'ref' => 'form'])
				@slot('text')
					@if(old('form'))
						{{ old('form') }}
					@elseif(isset($presetForm))
						{{ $presetForm->uniqueName }}
					@elseif(isset($example))
						{{ $example->form->uniqueName }}
					@endif
				@endslot
				@slot('value')
					@if(old('form_id'))
						{{ old('form_id') }}
					@elseif(isset($presetForm))
						{{ $presetForm->id }}
					@elseif(isset($example))
						{{ $example->form_id }}
					@endif		
				@endslot
			@endcomponent
		</div>

		{{-- morphemicForm field --}}
		<div class="column is-half">
			@component('components.form.text', ['name' => 'morphemicForm', 'label' => 'Morphemes'])
				@slot('value')
					@if(old('morphemicForm'))
						{{ old('morphemicForm') }}
					@elseif(isset($presetForm))
						{{ $presetForm->morphemicForm }}
					@elseif(isset($example))
						{{ $example->morphemicForm }}
					@endif
				@endslot
			@endcomponent
		</div>

		{{-- Translation field --}}
		<div class="column is-12">
			@component('components.form.text', ['name' => 'translation', 'label' => 'Translation', 'required' => true])
				@slot('value')
					@if(old('translation'))
						{{ old('translation') }}
					@elseif(isset($example))
						{{ $example->translation }}
					@endif
				@endslot
			@endcomponent
		</div>
	</div>

	{{-- Public comments field --}}
	@component('components.form.textarea', ['name' => 'notes', 'label' => 'Public Notes'])
		@slot('value')
			@if(old('notes'))
				{{ old('notes') }}
			@elseif(isset($example))
				{{ $example->notes }}
			@endif
		@endslot
	@endcomponent
	</div>
</alg-example-form>

{{-- 
<fieldset>
	{{ Form::text('parent') }}
	{{ Form::hidden('parent_id',null,['id' => 'parent_id']) }}

	{{ Form::label('name','Example') }}
	{{ Form::text('name') }}
	{{ Form::label('vStem', 'Verb Stem') }}
	{{ Form::text('vStem') }}
	{{ Form::hidden('vStem_id',null,['id' => 'vStem_id']) }}
	{{ Form::label('translation', 'Translation') }}
	{{ Form::text('translation') }}
</fieldset>
<fieldset>
	{{ Form::label('comments','Comments') }}
	{{ Form::textarea('comments', null, ['rows' => 3]) }}
</fieldset>
<fieldset>
	@include('sources.partials.select_source')
</fieldset>
<fieldset>
	{{ Form::submit('Submit') }}
</fieldset> --}}