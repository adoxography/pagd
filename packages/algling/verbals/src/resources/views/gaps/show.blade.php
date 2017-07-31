@extends('layout', ['title' => $gap->structure->summary])

@section('title')
	{!! $gap->structure->present() !!} ({!! $gap->language->present('link') !!})
@endsection

@include('components.show-icons', ['model' => $gap, 'uri' => '/verbs/gaps/'])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">
					Description
					<a class="icon">
						<span class="icon is-small" title="?">
							<i class="fa fa-question-circle-o"></i>
						</span>
					</a>
				</span>
				{!! $gap->structure->present() !!}
				@if($gap->structure->hasModifiers())
					({{ $gap->structure->isNegative ? 'Negative' : '' }} {{ $gap->structure->isDiminutive ? 'Diminutive' : '' }}			
					{{ isset($gap->structure->isAbsolute) ? ($gap->structure->isAbsolute ? 'Absolute' : 'Objective') : '' }})
				@endif
				<br />
				<em><a href="/verbs/search/paradigm/results?languages%5B%5D={{ $gap->language->name }}&languages%5B%5D_id={{ $gap->language_id }}&classes[]={{ $gap->structure->class_id }}&subclasses[]={{ $gap->structure->subclass }}&orders[]={{ $gap->structure->order_id }}&affirmative={{ $gap->structure->isNegative ? '0' : '1' }}&negative={{ $gap->structure->isNegative or '0' }}&diminutive={{ $gap->structure->isDiminutive or '0' }}&modeSelect=selectModes&modes[]={{ $gap->structure->mode_id }}">View paradigm</a>
				</em>
			</div>
		</div>
		<div class="column">
			@if($gap->historicalNotes)
				<div class="field">
					<span class="label">Historical notes</span>
					{!! replaceTags($gap->historicalNotes, $gap->language_id) !!}
				</div>
			@endif

			@if($gap->privateNotes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($gap->privateNotes, $gap->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $gap->sources])
	</div>
@endsection