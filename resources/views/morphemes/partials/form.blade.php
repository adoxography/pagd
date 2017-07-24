<alg-morpheme-form
	inline-template
	v-cloak
	:old-errors="{{ json_encode($errors->messages()) }}"

	@if(old('sources', 'not found') !== 'not found')
	:old-sources="{{ json_encode(old('sources')) }}"
	@elseif(isset($morpheme))
	:old-sources="{{ $morpheme->sources }}"
	@endif
>
	@component('components.form', ['method' => $method, 'action' => $action, 'visible' => true])
		<div class="columns is-multiline">

			<!-- Name -->
			<div class="column is-half">
				@component('components.form.text', [
					'name'      => 'name',
					'autofocus' => true, 
					'rules'     => 'required|isHyphenated|noInternalHyphens'
				])
					@slot('value')
						@if(isset($morpheme))
							{{ str_replace('*', '', $morpheme->name) }}
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
						@if(isset($morpheme))
							{{ $morpheme->language->name }}
						@elseif(isset($language))
							{{ $language->name }}
						@endif
					@endslot
				@endcomponent
			</div>

			<div class="column is-half">
				<label for="glosses" class="label">Gloss</label>
				<alg-tag-input
					v-model="glosses"
					:list="{{ $glosses }}"
					name="gloss"
					id="gloss"
					@input="errors.clear('gloss')"
					placeholder="Select glosses from the list or type your own and press 'enter'"
					:classes="{'is-danger': errors.has('gloss')}"

					@if(isset($morpheme))
					initial="{{ $morpheme->gloss }}"
					@endif
				></alg-tag-input>
				<span class="help is-danger"
					  v-show="errors.has('gloss')"
					  v-text="errors.first('gloss')">
				</span>				
			</div>

			<!-- Slot -->
			<div class="column is-half">
				@component('components.form.datalist', [
					'name'  => 'slot',
					'list'  => $slots,
					'rules' => 'required|exists'
				])
					@slot('value')
						@if(isset($morpheme))
							{{ $morpheme->slot->abv }}
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
					'uri' => '/autocomplete/morphemeParents',
					'with' => '{ language: language.id }',
					'disabled' => '!language.id',
					'placeholder' => 'Make sure to select the language first',
					'rules' => 'exists',
				])
					@slot('value')
						@if(isset($morpheme))
							@if($morpheme->parent)
								{{ '{ "text": "'.str_replace('*', '', $morpheme->parent->present()->as('unique')->then('language')).'", "id": "'.$morpheme->parent_id.'" }' }}
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
					'disabled' => '!parent.id || !language.id',
					'options' => $changeTypes,
					'selected' => isset($morpheme) ? $morpheme->changeType_id : ''
				])
			</div>
		</div>

		<hr>
		<alg-sources v-model="sources"></alg-sources>

		<hr>
		<h4 class="subtitle is-4">Notes</h4>
		<div class="columns is-multiline">
			<div class="column is-half">
				@component('components.form.textarea', [
					'name' => 'allomorphyNotes',
					'label' => 'allomorphy'
				])
					@slot('value')
						@if(isset($morpheme))
							{{ $morpheme->allomorphyNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'historicalNotes',
					'label'       => 'historical notes'
				])
					@slot('value')
						@if(isset($morpheme))
							{{ $morpheme->historicalNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
			<div class="column is-half">
				@component('components.form.textarea', [
					'name'        => 'privateNotes',
					'label'       => 'private notes'
				])
					@slot('value')
						@if(isset($morpheme))
							{{ $morpheme->privateNotes }}
						@endif
					@endslot
				@endcomponent
			</div>
		</div>
	@endcomponent
</alg-morpheme-form>