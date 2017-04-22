@extends('layout')

@section('content')

<?php
	$language = App\Language::find(1);

	$sources = $language->sources();

    $types = Algling\SS\Models\Type::with('variables')->get();

    if(count($types) > 0) {
        $types = $types->filter(function($value, $key) {
                    return count($value->variables) > 0;
                 });
    }
?>

<alg-language-model v-cloak>
	<alg-language-tab name="Basic details">
		<alg-language-subtab name="Details">
			<div class="columns is-multiline">
			{{-- Group field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'Group'])
				<a href="/groups/{{ $language->group_id }}">{{ $language->group->name }}</a>
			@endcomponent

			{{-- Parent field --}}
			@if($language->parent)
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Parent'])
					@if($language->parent)
						<a href="/languages/{{ $language->parent_id }}">{{ $language->parent->name }}</a>
					@else
						None
					@endif
				@endcomponent
			@else
				<div class="column is-half"></div>
			@endif

			{{-- ISO field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'ISO Code'])
				{{ $language->iso }}
			@endcomponent

			{{-- Algonquianist code field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'Algonquianist Code'])
				{{ $language->algoCode }}
			@endcomponent

			@include('components.model.text', ['width' => 'is-12', 'label' => 'Notes', 'text' => $language->notes, 'language_id' => $language->id])
			</div>
		</alg-language-subtab>
		<alg-language-subtab name="Children">
			@component('components.model.field', ['label' => 'Children'])
				@slot('label')
					Children @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addChild"]) @endcomponent
				@endslot
				@if(count($language->children) > 0)
					<ul>
						@foreach($language->children as $child)
							<li><a href="/languages/{{ $child->id }}">{{ $child->name }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent	
		</alg-language-subtab>
	</alg-language-tab>
	<alg-language-tab name="Verbs">
		<alg-language-subtab name="Paradigms">
			<ul>
			@foreach($language->getParadigms() as $title => $paradigmSet)
				<li>
					{{ $title }}
					@foreach($paradigmSet as $paradigm)
						<a href="/search/paradigm?classes%5B%5D={{ $paradigm['class']->id }}&orders%5B%5D={{ $paradigm['order']->id }}&modeSelect=selectModes&modes%5B%5D={{ $paradigm['mode']->id }}&affirmative=on&nonDiminutive=on&languages%5B%5D={{ $language->name }}&languages%5B%5D_id={{ $language->id }}">
							{{ $paradigm['class']->name }}
						</a>
					@endforeach
				</li>
			@endforeach
			</ul>
		</alg-language-subtab>
		<alg-language-subtab name="Forms">
			<div class="columns">
				@component('components.model.field', ['width' => 'is-half'])
					@slot('label')
						Forms @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addForm"]) @endcomponent
					@endslot
					@if(count($language->forms) > 0)
						<ul>
							@foreach($language->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{!! $form->renderHTML() !!}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endcomponent

				@if(count($language->emptyForms) > 0)
				@component('components.model.field', ['width' => 'is-half'])
					@slot('label')
						Empty Forms
					@endslot
					<ul>
						@foreach($language->emptyForms as $form)
							<li><a href="/empty-forms/{{ $form->id }}">{{ $form->formType->summary }}</a></li>
						@endforeach
					</ul>
				@endcomponent
				@endif
			</div>
		</alg-language-subtab>
		<alg-language-subtab name="Examples">
			@component('components.model.field', ['label' => 'Examples'])
				@slot('label')
					Examples @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addExample"]) @endcomponent
				@endslot
				@if(count($language->examples) > 0)
					<ul>
						@foreach($language->examples as $example)
							<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent
		</alg-language-subtab>
	</alg-language-tab>
	<alg-language-tab name="Nominals">
	</alg-language-tab>
	<alg-language-tab name="Rules">
		<alg-language-subtab name="Rules">
			@component('components.model.field', ['width' => 'is-half'])
				@slot('label')
					Rules @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addRule"]) @endcomponent
				@endslot
				<ul>
					@foreach($language->rules as $rule)
						<li><a href="/rules/{{ $rule->id }}">{{ $rule->name }}</a></li>
					@endforeach
				</ul>
			@endcomponent
		</alg-language-subtab>
	</alg-language-tab>
	<alg-language-tab name="Structural Survey">
		@foreach($types as $type)
			<alg-language-subtab name="{{ $type->name }}">
			<table class="table" style="display: block;">
				<thead>
					<tr>
						<th>Variable</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					@foreach($type->variables as $variable)
						<tr>
							<td><a href="/variables/{{ $variable->id }}">{{ $variable->name }}</a></td>
							<td>
								<?php
									$index = $language->datapoints->search(function($val) use ($variable) {
										return $val->variable_id == $variable->id;
									});
								?>
								@if($index !== false)
									<a href="/datapoints/{{ $language->datapoints[$index]->id }}">
										{{ $language->datapoints[$index]->value->name }}
									</a>
								@else
									Not entered
									@if(Auth::user() && Auth::user()->permissions->canEdit)
										(<a href="/variables/{{ $variable->id }}/languages/{{ $language->id }}/addDatapoint">Add</a>)
									@endif
								@endif
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>
			</alg-language-subtab>
		@endforeach
	</alg-language-tab>
	<alg-language-tab name="Bibliography">
		<alg-language-subtab name="Sources">
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
				@include('components.model.sourcelist', ['sources' => $sources])
			@endcomponent
		</alg-language-subtab>
	</alg-language-tab>
</alg-language-model>

@endsection