<alg-generic-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		@component('components.form.text', [
			'name'      => 'abv',
			'label'     => 'abbreviation',
			'autofocus' => true,
			'rules'     => 'required'
		])
			@slot('value')
				@if(request()->abv)
					{{ request()->abv }}
				@elseif(isset($model))
					{{ $model->abv }}
				@endif
			@endslot
		@endcomponent

		@component('components.form.text', [
			'name'      => 'name',
			'rules'     => 'required'
		])
			@slot('value')
				@if(isset($model))
					{{ $model->name }}
				@endif
			@endslot
		@endcomponent

		@if(Schema::hasColumn($model->getTable(), 'colour'))
			@component('components.form.text', [
				'name'      => 'colour'
			])
				@slot('value')
					@if(isset($model))
						{{ $model->colour }}
					@endif
				@endslot
			@endcomponent
		@endif

		@component('components.form.textarea', [
			'name'        => 'description'
		])
			@slot('value')
				@if(isset($model))
					{{ $model->description }}
				@endif
			@endslot
		@endcomponent
	@endcomponent
</alg-generic-form>