<alg-audio-form
	inline-template
	v-cloak
>
	@component('components.form', [
		'method' => $method,
		'action' => $action,
		'visible' => true,
		'files' => true
	])
		<div class="columns">
			<div class="column is-narrow">
				@component('components.form.file', [
					'name' => 'clip',
					'accept' => 'audio/*',
					'uploadHandler' => 'onUpload'
				])
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.text', [
					'name' => 'name',
					'rules' => 'required'
				])
				    @slot('value')
				        @if (isset($audio))
				        	{{ $audio->name }}
				        @endif
				    @endslot
				@endcomponent
			</div>
			<div class="column">
				@component('components.form.datalist', [
					'list' => $languages,
					'name' => 'language',
					'rules' => 'required|exists'
				])
				    @slot('value')
				        @if (isset($audio))
				        	{{ $audio->language->name }}
				        @endif
				    @endslot
				@endcomponent
			</div>
		</div>

		@component('components.form.textarea', [
			'name' => 'comments'
		])
		    @slot('value')
		        @if (isset($audio))
		        	{{ $audio->comments }}
		        @endif
		    @endslot
		@endcomponent
	@endcomponent
</alg-audio-form>