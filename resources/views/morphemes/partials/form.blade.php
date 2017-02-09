

<div class="columns is-multiline">
	<div class="column is-half">

		{{-- Name field --}}
		@component('components.form.text', ['name' => 'name', 'required' => 'required', 'label' => 'Morpheme'])
			@slot('value')
				@if(old('name'))
					{{ str_replace('*', '', old('name')) }}
				@elseif(isset($morpheme))
					{{ str_replace('*', '', $morpheme->name) }}
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
				@elseif(isset($morpheme))
					{{ $morpheme->language->name }}
				@endif
			@endslot
		@endcomponent

	</div>

	<div class="column is-half">
		@component('components.form.text', ['name' => 'alternateName', 'label' => 'Initial Changed Morpheme'])
			@slot('placeholder')
				The morpheme when affected by initial change (leave blank if N/A)
			@endslot
			@slot('value')
				@if(old('alternateName'))
					old('alternateName')
				@elseif(isset($morpheme) && $morpheme->hasAlternateName())
					{{ $morpheme->alternateName }}
				@endif
			@endslot
		@endcomponent
	</div>
	<div class="column is-one-quarter">

		{{-- Gloss field --}}
		@component('components.form.datalist', ['name' => 'gloss', 'label' => 'Gloss', 'list' => $glosses, 'required' => true])
			@slot('placeholder')
				Select a gloss from the list or type a new one in 'ABV (Full Name)' format
			@endslot
			@slot('value')
				@if(old('gloss'))
					{{ old('gloss') }}
				@elseif(isset($morpheme))
					{{ $morpheme->gloss->abv }} {{ $morpheme->translation ? "({$morpheme->translation})" : ""}}
				@endif
			@endslot
		@endcomponent

	</div>
	<div class="column is-one-quarter">

		{{-- Slot field --}}
		@component('components.form.datalist', ['name' => 'slot', 'label' => 'Slot', 'list' => $slots, 'required' => true])
			@slot('value')
				@if(old('slot'))
					{{ old('slot') }}
				@elseif(isset($morpheme))
					{{ $morpheme->slot->abv }}
				@else
				 	V
				@endif
			@endslot
		@endcomponent

	</div>
</div>

{{-- Allomorphy notes field --}}
@component('components.form.textarea', ['name' => 'allomorphyNotes', 'label' => 'Allomorphy Notes'])
	@slot('placeholder')
		Enter notes about this morpheme's allomorphs
	@endslot
	@slot('value')
		@if(old('allomorphyNotes'))
			{{ old('allomorphyNotes') }}
		@elseif(isset($morpheme))
			{{ $morpheme->allomorphyNotes }}
		@endif
	@endslot
@endcomponent

{{-- Parent field --}}
@component('components.form.ajaxlist', ['name' => 'parent', 'label' => 'Parent', 'uri' => '/autocomplete/morphemeParents', 'listen' => 'language_id'])	
	@slot('placeholder')
		After selecting a language, all of its ancestors' morphemes will be available as options
	@endslot
	@slot('text')
		@if(old('parent'))
			{{ old('parent') }}
		@elseif(isset($morpheme) && $morpheme->parent)
			{{ $morpheme->parent->name }} ({{ $morpheme->parent->language->name }})
		@endif
	@endslot
	@slot('value')
		@if(old('parent_id'))
			{{ old('parent_id') }}
		@elseif(isset($morpheme) && $morpheme->parent)
			{{ $morpheme->parent_id }}
		@endif
	@endslot
@endcomponent

{{-- Change Type field --}}
@component('components.form.select', ['name' => 'changeType_id', 'label' => 'Change Type', 'options' => $changeTypes->prepend(['id' => null, 'name' => 'N/A'])])
	@slot('value')
		@if(old('changeType_id'))
			{{ old('changeType') }}
		@elseif(isset($morpheme))
			{{ $morpheme->changeType_id }}
		@endif
	@endslot
@endcomponent

{{-- Historical notes field --}}
@component('components.form.textarea', ['name' => 'historicalNotes', 'label' => 'Historical Notes'])
	@slot('placeholder')
		Enter historical information about this morpheme
	@endslot
	@slot('value')
		@if(old('historicalNotes'))
			{{ old('historicalNotes') }}
		@elseif(isset($morpheme))
			{{ $morpheme->historicalNotes }}
		@endif
	@endslot
@endcomponent

{{-- Comments field --}}
@component('components.form.textarea', ['name' => 'comments', 'label' => 'Private Comments'])
	@slot('placeholder')
		Comments here will not be available to the public
	@endslot
	@slot('value')
		@if(old('comments'))
			{{ old('comments') }}
		@elseif(isset($morpheme))
			{{ $morpheme->comments }}
		@endif
	@endslot
@endcomponent

{{-- Source input --}}
@component('components.form.sources')
	@slot('value')
		@if(old('sources'))
			{{ json_encode(old('sources')) }}
		@elseif(isset($morpheme))
			{{ $morpheme->sources }}
		@endif
	@endslot
@endcomponent

<button type="submit" class="button is-primary">Submit</button>