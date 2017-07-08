@extends('layout', ['title' => 'Datapoint'])

@section('title')
	<label>Datapoint details:</label>
	{{ $datapoint->language->name }}/{{ $datapoint->variable->name }}
@endsection

@include('components.show-icons', ['model' => $datapoint])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Language</span>
				{!! $datapoint->language->renderHTML() !!}
			</div>
			<div class="field">
				<span class="label">Variable</span>
				<a href="/variables/{{ $datapoint->variable_id }}">{{ $datapoint->variable->name }}</a>
			</div>
			<div class="field">
				<span class="label">Value</span>
				{{ $datapoint->value->name }}
			</div>
			@if($datapoint->note)
				<div class="field">
					<span class="label">Note</span>
					{!! $datapoint->note !!}
				</div>
			@endif
		</div>
		<div class="column">
			@if(Auth::user() && Auth::user()->permissions->canEdit)
				@if ($datapoint->isExtension)
					<div class="field">
						<span class="label">Extended from <a href="/datapoints/{{ $datapoint->language->parent->getVariable($datapoint->variable)->id }}">{{ $datapoint->language->parent->present() }}</a></span>
					</div>
				@elseif ($datapoint->isExtended)
					<div class="field">
						<span class="label">Extending to child languages</span>
					</div>
				@endif
			@endif

			@if($datapoint->comments)
				<div class="field">
					<span class="label">Comments</span>
					{!! replaceTags($datapoint->comments) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $datapoint->sources])
	</div>
@endsection