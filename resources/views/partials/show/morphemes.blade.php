@php
if(!isset($uri)) {
	$uri = '/'.strtolower(Arr::last(explode('_', $model->table))).'/';
}
@endphp

<alg-filter inline-template v-cloak :lists="{{ json_encode(['morphemes' => $model->morphemes]) }}">
	<div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Filter</label>
			</div>
			<div class="field-body">
				<div class="field">
					<p class="control is-expanded">
						<input name="name" class="input" placeholder="By morpheme" @input="onInput($event)" data-operator="like" />
					</p>
				</div>
				<div class="field">
					<div class="control">
						<div class="select is-fullwidth">
							<select name="slot_id" @input="onInput($event)">
								<option value="">By slot</option>
								@foreach($slots as $slot)
									<option value="{{ $slot->id }}">{{ $slot->abv }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<div class="select is-fullwidth">
							<select name="gloss" @input="onInput($event)" data-operator="like">
								<option value="">By gloss</option>
								@foreach($glosses as $gloss)
									<option>{{ $gloss->abv }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
		<label class="label">
			Morphemes
			@if(!isset($showAddButtons) || $showAddButtons)
				@component('components.model.add-icon', ['uri' => "{$uri}{$model->id}/addMorpheme"]) @endcomponent
			@endif
		</label>
		<ul>
			<li v-for="item in filteredLists['morphemes']" v-html="item.html"></li>
			<span v-show="filteredLists['morphemes'].length == 0">No results</span>
		</ul>
	</div>
</alg-filter>
