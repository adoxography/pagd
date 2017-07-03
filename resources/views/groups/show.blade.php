@php

function recursiveRender($group) {
	$html = '';

	$data = $group->directDescendants()->sortBy('position');

	foreach($data as $child) {
		$html .= "<li>{$child->renderLink()}</li>";

		if($child instanceof App\Group && $child->languages->count() > 0) {
			$html .= '<li>' . recursiveRender($child) . '<li>';
		}
	}

	return "<ul style='margin-left:2rem'>$html</ul>";
}

@endphp

@extends('layout', ['title' => "{$group->name} languages"])

@section('title')
	<label>Group details:</label>
	{{ $group->name }} languages
@endsection

@include('components.show-icons', ['model' => $group])

@section('content')
	<div class="columns">
		<div class="column is-narrow">
			<label class="label">Languages in this group
				@if(Auth::user() && Auth::user()->permissions->canEdit)
					(<a href="/groups/{{ $group->id }}/order/edit">reorder</a>)
				@endif
			</label>
			<ul>
				<li>{{ $group->name }} languages</li>
				<li>{!! recursiveRender($group) !!}</li>
			</ul>
		</div>
		<div class="column">
			<div class="columns">
				<div class="column">
					<div class="field">
						<span class="is-one-line">
							<span class="label">Group:</span>
							{{ $group->name }} languages
						</span>

						@if($group->parent)
						<span class="is-one-line">
							<span class="label">Parent group:</span>
							{!! $group->parent->renderLink() !!}
						</span>
						@endif
					</div>
				</div>
				<div class="column">

					@if($group->publicNotes)
						<div class="field">
							<span class="label">Public notes</span>
							{!! replaceTags($group->publicNotes) !!}
						</div>
					@endif

					@if($group->privateNotes)
						<div class="field">
							<span class="label">Private notes</span>
							{!! replaceTags($group->privateNotes) !!}
						</div>
					@endif
				</div>
			</div>
			<div class="field">
				<span class="label">Sources</span>
				@include('components.model.sourcelist', ['sources' => $group->sources])
			</div>
		</div>
	</div>
@endsection