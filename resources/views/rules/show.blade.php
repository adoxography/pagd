@extends('layout', ['title' => $rule->name])

@section('title')
	<label>Rule details:</label>
	{!! $rule->present()->as('name', 'bold')->then('language')->as('link') !!}
@endsection

@include('components.show-icons', ['model' => $rule])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Rule</span>
				{!! $rule->rule !!}
			</div>
			<div class="field">
				<span class="label">Abbreviation</span>
				{!! $rule->abv !!}
			</div>
			<div class="field">
				<span class="label">Type</span>
				{!! optional($rule->type)->name !!}
			</div>
		</div>
		<div class="column">
			@if($rule->publicComments)
				<div class="field">
					<span class="label">Notes</span>
					{!! replaceTags($rule->publicComments, $rule->language_id) !!}
				</div>
			@endif
			@if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $rule->privateComments)
				<div class="field">
					<span class="label">Notes</span>
					{!! replaceTags($rule->privateComments, $rule->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $rule->sources])
	</div>
@endsection
