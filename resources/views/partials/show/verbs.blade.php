@php
if(!isset($uri)) {
	$uri = '/'.strtolower(array_last(explode('_', $model->table))).'/';
}
@endphp

<alg-filter
	:lists="{{ json_encode([
		'forms'    => method_exists($model, 'verbForms')    ? $model->verbForms    : $model->forms,
		'gaps'     => method_exists($model, 'verbGaps')     ? $model->verbGaps     : $model->gaps,
		'examples' => method_exists($model, 'verbExamples') ? $model->verbExamples : $model->examples
	]) }}"
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
								<select name="structure.subject_id" @input="onInput($event)">
									<option value="">By subject</option>
									@foreach(App\Models\Verbs\Argument::select(['id', 'name'])->orderBy('name')->get() as $arg)
									<option value="{{ $arg->id }}">{{ $arg->name }}</option>
									@endforeach
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select name="structure.primaryObject_id" @input="onInput($event)">
									<option value="">By primary object</option>
									<option value="null">None</option>
									@foreach(App\Models\Verbs\Argument::select(['id', 'name'])->orderBy('name')->get() as $arg)
									<option value="{{ $arg->id }}">{{ $arg->name }}</option>
									@endforeach
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select name="structure.secondaryObject_id" @input="onInput($event)">
									<option value="">By secondary object</option>
									<option value="null">None</option>
									@foreach(App\Models\Verbs\Argument::select(['id', 'name'])->orderBy('name')->get() as $arg)
									<option value="{{ $arg->id }}">{{ $arg->name }}</option>
									@endforeach
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="field is-horizontal">
				<div class="field-label"></div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select name="structure.class_id" @input="onInput($event)">
									<option value="">By class</option>
									@foreach(App\Models\Verbs\VerbClass::select(['id', 'name'])->orderBy('name')->get() as $class)
									<option value="{{ $class->id }}">{{ $class->name }}</option>
									@endforeach
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select name="structure.order_id" @input="onInput($event)">
									<option value="">By order</option>
									@foreach(App\Models\Verbs\Order::select(['id', 'name'])->orderBy('position')->get() as $order)
									<option value="{{ $order->id }}">{{ $order->name }}</option>
									@endforeach
								</select>
							</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
							<div class="select is-fullwidth">
								<select name="structure.mode_id" @input="onInput($event)">
									<option value="">By mode</option>
									@foreach(App\Models\Verbs\Mode::select(['id', 'name'])->orderBy('name')->get() as $mode)
									<option value="{{ $mode->id }}">{{ $mode->name }}</option>
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
							@include('components.model.add-icon', ['uri' => "{$uri}{$model->id}/addVerbForm"])
						@endif
					</label>
					<ul>
						<li v-for="item in filteredLists['forms']" v-html="item.html"></li>
					</ul>
					<span v-show="filteredLists['forms'].length == 0">No results</span>
				</div>
				@if(count($model->gaps) > 0)
				<div class="column">
					<label class="label">Gaps</label>
					<ul>
						<li v-for="item in filteredLists['gaps']">@{{ item.structure.summary }}</li>
					</ul>
					<span v-show="filteredLists['gaps'].length == 0">No results</span>
				</div>
				@endif
				<div class="column">
					<label class="label">
						Examples
						@if(!isset($showAddButtons) || $showAddButtons)
							@include('components.model.add-icon', ['uri' => "{$uri}{$model->id}/addExample"])
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
