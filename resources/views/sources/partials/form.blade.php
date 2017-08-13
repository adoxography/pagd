<alg-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns">
			<div class="column">
				@component('components.form.text', [
					'name'      => 'author',
					'autofocus' => true,
					'rules'     => 'required'
				])
					@slot('value')
						@if(isset($source))
							{{ $source->author }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.text', [
					'name'  => 'year',
					'rules' => 'required'
				])
					@slot('value')
						@if(isset($source))
							{{ $source->year }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
		@component('components.form.textarea', [
			'name'  => 'long',
			'label' => 'full citation',
			'rules' => 'required'
		])
			@slot('value')
				@if(isset($source))
					{{ $source->long }}
				@endif
			@endslot
		@endcomponent

		@component('components.form.text', [
			'name'  => 'url',
			'rules' => 'url'
		])
			@slot('value')
				@if(isset($source))
					{{ $source->url }}
				@endif
			@endslot
		@endcomponent

		@component('components.form.textarea', [
			'name'  => 'summary'
		])
			@slot('value')
				@if(isset($source))
					{{ $source->summary }}
				@endif
			@endslot
		@endcomponent

		@component('components.form.textarea', [
			'name'  => 'notes'
		])
			@slot('value')
				@if(isset($source))
					{{ $source->notes }}
				@endif
			@endslot
		@endcomponent
	@endcomponent
</alg-form>
