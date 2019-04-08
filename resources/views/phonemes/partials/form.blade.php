<alg-phoneme-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('isArchiphoneme') || isset($phoneme) && $phoneme->isArchiphoneme)
        :old-is-archiphoneme="true"
    @endif

	@if(isset($phoneme))
		old-type="{{ $phoneme->featureable_type }}"
	@elseif(isset($type))
		old-type="{{ $type . 'Types' }}"
	@endif

	@if(old('sources', 'not found') !== 'not found')
		:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($phoneme))
		:old-sources="{{ $phoneme->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns">
			<div class="column">

				{{-- Names --}}
				<div class="columns">
					<div class="column is-one-third">
						@component('components.form.text', [
							'name'      => 'algo_name',
							'autofocus' => true,
							'rules'     => 'required',
							'label'     => 'algonquianist transcription',
							'typewriter' => true
						])
							@slot('value')
								@if(isset($phoneme))
									{{ str_replace('*', '', $phoneme->algo_name) }}
								@endif
							@endslot
						@endcomponent
					</div>

					<div class="column is-one-third">
						@component('components.form.text', [
							'name'      => 'ipa_name',
							'label'     => 'IPA transcription',
							'typewriter' => true
						])
							@slot('value')
								@if(isset($phoneme))
									{{ str_replace(['*', '/'], '', $phoneme->ipa_name) }}
								@endif
							@endslot
						@endcomponent
					</div>

					<div class="column is-one-third">
						@component('components.form.text', [
							'name'      => 'ortho_name',
							'label'     => 'community orthography',
							'typewriter' => true
						])
							@slot('value')
								@if(isset($phoneme))
									{{ $phoneme->ortho_name }}
								@endif
							@endslot
						@endcomponent
					</div>
				</div>

				{{-- Language --}}
				@component('components.form.datalist', [
					'name'  => 'language',
					'list'  => $languages,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($phoneme))
							{{ $phoneme->language->name }}
						@endif
					@endslot
				@endcomponent

                <transition name="fade">
                    <div v-show="isArchiphoneme">
                        @component('components.form.text', [
                            'name' => 'archiphonemeDescription',
                            'label' => 'description',
                            'activeRules' => 'archiphonemeDescriptionConstraints',
                            'placeholder' => 'Enter a description of the archiphoneme'
                        ])
                            @slot('value')
                                @if (isset($phoneme))
                                    {{ $phoneme->archiphonemeDescription }}
                                @endif
                            @endslot
                        @endcomponent
                    </div>
                </transition>

                {{--Marginal status--}}
                @include('components.form.checkbox', [
                    'name' => 'isMarginal',
                    'label' => 'marginal',
                    'checked' => isset($phoneme) ? $phoneme->isMarginal : false
                ])
			</div>

			{{-- Features --}}
			<div class="column">
				@include('components.form.select', [
					'name' => 'featureable_type',
					'label' => 'type',
					'options' => [
						'Vowel'     => 'vowelTypes',
						'Consonant' => 'consonantTypes',
						'Cluster'   => 'clusterTypes'
					],
					'model' => 'type',
					'activeRules' => 'typeConstraints'
				])

				<transition name="fade" mode="out-in">
					<div v-if="type == 'consonantTypes'" key="consonantTypes">
						@include('phonemes.partials.consonantFeatures')
					</div>
					<div v-else-if="type == 'vowelTypes'" key="vowelTypes">
						@include('phonemes.partials.vowelFeatures')
					</div>
					<div v-else-if="type == 'clusterTypes'" key="clusterTypes">
						@include('phonemes.partials.clusterFeatures')
					</div>
				</transition>
			</div>
		</div>

		<hr>
		<h4 class="subtitle is-4">Allophones</h4>
		<alg-allophone-form
			@if(isset($phoneme))
			:old="{{ $phoneme->allophones }}"
			@endif
		></alg-allophone-form>

		<hr>
		<h4 class="subtitle is-4">Examples</h4>
		<alg-phoneme-examples
			:language="language"
			@isset($phoneme)
				:old="{{ $phoneme->examples }}"
			@endisset
		></alg-phoneme-examples>

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns is-multiline">

			{{-- Phonetic notes --}}
			<div class="column is-half">
				@component('components.form.textarea', [
					'name' => 'phoneticNotes',
					'label' => 'phonetic notes'
				])
					@slot('value')
						@if(isset($phoneme))
							{{ $phoneme->phoneticNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- Orthographic notes --}}
			<div class="column is-half">
				@component('components.form.textarea', [
					'name' => 'orthoNotes',
					'label' => 'orthographic notes'
				])
					@slot('value')
						@if(isset($phoneme))
							{{ $phoneme->orthoNotes }}
						@endif
					@endslot
				@endcomponent
			</div>

			{{-- Private notes --}}
			<div class="column is-half">
				@component('components.form.textarea', [
					'name' => 'privateNotes',
					'label' => 'private notes'
				])
					@slot('value')
						@if(isset($phoneme))
							{{ $phoneme->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-phoneme-form>
