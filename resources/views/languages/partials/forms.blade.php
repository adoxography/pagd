@extends('languages/show')

@section('model-content')

<div class="columns">
	<div class="column">
		<label class="label">Forms</label>
		<ul>
			@foreach($language->forms as $form)
			<li><a href="/forms/{{ $form->id }}">{!! $form->renderHTML() !!}</a></li>
			@endforeach
		</ul>
	</div>
	@if(count($language->gaps) > 0)
	<div class="column">
		<label class="label">Gaps</label>
		<ul>
			@foreach($language->gaps as $gap)
				<li><a href="/gaps/{{ $gap->id }}">{{ $gap->structure->summary }}</a></li>
			@endforeach
		</ul>
	</div>
	@endif
	<div class="column">
		<label class="label">Examples</label>
		<ul>
			@foreach($language->examples as $example)
			<li><a href="/examples/{{ $example->id }}">{!! $example->renderHTML() !!}</a></li>
			@endforeach
		</ul>
	</div>

@endsection