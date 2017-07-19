@extends('layout', ['title' => $rule->name])

@section('title')
	<label>Rule details:</label>
	{{ $rule->name }} ({!! $rule->language->present('link') !!})
@endsection

@include('components.show-icons', ['model' => $rule])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Rule</span>
				{{ $rule->rule }}
			</div>
			<div class="field">
				<span class="label">Abbreviation</span>
				{{ $rule->abv }}
			</div>
		</div>
		<div class="column">
			@if($rule->publicComments)
				<div class="field">
					<span class="label">Notes</span>
					{!! replaceTags($rule->publicComments, $rule->language_id) !!}
				</div>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit && $rule->privateComments)
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