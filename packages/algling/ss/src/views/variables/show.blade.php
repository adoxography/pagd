@extends('layout', ['title' => $variable->name])

@section('content')

<div class="heading">
	<h1 class="title">Variable Details</h1>
</div>
<br />

@component('components.model', ['model' => $variable, 'uri' => "/variables/{$variable->id}"])
	@slot('header')
		{{ $variable->name }}
	@endslot

	<model-tab name="Basic Details" selected="selected">
		<div class="column is-half">
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Type'])
				{{ $variable->type->name }}
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Description'])
				{{ $variable->description }}
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
				@include('components.model.sourcelist', ['sources' => $variable->sources])
			@endcomponent
		</div>

		<div class="column is-half">
			@component('components.model.field', ['label' => 'Options'])
				<ul>
					@foreach($variable->values as $value)
						<li>{{ $value->name }}</li>
					@endforeach
				</ul>
			@endcomponent
		</div>
	</model-tab>

	@if(isset($variable->essay))
	<model-tab name="Essay">
		@include('components.model.text', ['width' => 'is-12', 'label' => 'Essay', 'text' => $variable->essay])
	</model-tab>
	@endif

	<model-tab name="Datapoints">
		<table class="table" style="display: block;">
			<thead>
				<tr>
					<th>Language</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				@foreach($languages as $language)
					<tr>
						<td>{!! $language->renderHTML() !!}</td>
						<td>
							<?php
								$index = $variable->datapoints->search(function($val) use ($language) {
									return $val->language_id == $language->id;
								});
							?>
							@if($index !== false)
								<a href="/datapoints/{{ $variable->datapoints[$index]->id }}">
									{{ $variable->datapoints[$index]->value->name }}
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
	</model-tab>
@endcomponent

@endsection