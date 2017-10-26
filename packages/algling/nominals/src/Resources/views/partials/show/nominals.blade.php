@php
if(method_exists($model, 'nominalParadigms')) {
	$paradigms = $model->nominalParadigms;
} elseif(method_exists($model, 'language')) {
	$paradigms = $model->language->nominalParadigms;
} else {
	$paradigms = Algling\Nominals\Models\Paradigm::all();
}

if(!isset($uri)) {
	$uri = '/'.strtolower(array_last(explode('_', $model->table)));
}
@endphp

<alg-filter
	:lists="{{ json_encode([
		'forms'    => $model->nominalForms,
		'examples' => isset($examples) ? $examples : $model->nominalExamples
	])}}"
	inline-template
	v-cloak
>
	<div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Filter</label>
			</div>
			<div class="field-body">
				<div class="field">
					<p class="control is-expanded">
						<input name="name" type="text" class="input" placeholder="By name" @input="onInput($event)" data-operator="like" />
					</p>
				</div>
				<div class="field">
					<div class="control">
						<div class="select is-fullwidth">
							<select name="structure.paradigm_id" @input="onInput($event)">
								<option value="">By paradigm</option>
								@foreach($paradigms as $paradigm)
								<option value="{{ $paradigm->id }}">{{ $paradigm->name }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal"></div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<div class="select is-fullwidth">
							<select name="structure.pronominalFeature_id" @input="onInput($event)">
								<option value="">By pronominal feature</option>
								@foreach($pronominalFeatures as $feature)
								<option value="{{ $feature->id }}">{{ $feature->name }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<div class="select is-fullwidth">
							<select name="structure.nominalFeature_id" @input="onInput($event)">
								<option value="">By nominal feature</option>
								@foreach($nominalFeatures as $feature)
								<option value="{{ $feature->id }}">{{ $feature->name }}</option>
								@endforeach
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<label class="label">
					Forms
					@if(!isset($showAddButtons) || $showAddButtons)
						@include('components.model.add-icon', ['uri' => "{$uri}/{$model->id}/addNominalForm"])
					@endif
				</label>
				<ul>
					<li v-for="item in filteredLists['forms']" v-html="item.html"></li>
				</ul>
				<span v-show="filteredLists['forms'].length == 0">No results</span>
			</div>
			<div class="column">
				<label class="label">
					Examples
					@if(!isset($showAddButtons) || $showAddButtons)
						@include('components.model.add-icon', ['uri' => "{$uri}/{$model->id}/addExample"])
					@endif
				</label>
				<ul>
					<li v-for="item in filteredLists['examples']" v-html="item.html"></li>
				</ul>
				<span v-show="filteredLists['examples'].length == 0">No results</span>
			</div>
		</div>
	</div>
</alg-filter>
