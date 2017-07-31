@extends('layout')

@section('title')
	Add phoneme example
@endsection

@section('content')
	@component('components.form', ['method' => 'POST', 'action' => '/phonemes/examples', 'visible' => true])
		<alg-phoneme-example-form
			inline-template
			v-cloak
		>
			<div>
				<div class="columns is-multiline">
					<div class="column is-half">
						@component('components.form.text', [
							'name'      => 'name',
							'rules'     => 'required',
							'autofocus' => true,
							'label'     => 'example'
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->name }}
						        @endif
						    @endslot
						@endcomponent
					</div>

					<div class="column is-half">
						@component('components.form.text', [
							'name'      => 'phonemicRepresentation',
							'label'     => 'phonemic representation'
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->phonemicRepresentation }}
						        @endif
						    @endslot
						@endcomponent
					</div>

					<div class="column is-half">
						@component('components.form.text', [
							'name'      => 'translation',
							'rules'     => 'required',
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->translation }}
						        @endif
						    @endslot
						@endcomponent
					</div>

					<div class="column is-half">
						@component('components.form.datalist', [
							'name' => 'language',
							'rules' => 'exists|required',
							'list' => App\Language::all()
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->language->name }}
						        @endif
						    @endslot
						@endcomponent
					</div>
				</div>

				<div class="columns">
					<div class="column">
						@component('components.form.textarea', [
							'name' => 'publicNotes',
							'label' => 'public notes'
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->publicNotes }}
						        @endif
						    @endslot
						@endcomponent
					</div>

					<div class="column">
						@component('components.form.textarea', [
							'name' => 'privateNotes',
							'label' => 'private notes'
						])
						    @slot('value')
						        @if (isset($example))
						        	{{ $example->privateNotes }}
						        @endif
						    @endslot
						@endcomponent
					</div>
				</div>
			</div>
		</alg-phoneme-example-form>	    
	@endcomponent
@endsection