@php

function recursiveRender($group) {
	$html = '';

	$data = $group->directDescendants()->sortBy('position');

	foreach($data as $child) {

		if($child instanceof App\Group) {
			if($child->languages->count() > 0) {
				$html .= '<li>';
				$html .= "<input type='checkbox' id='c{$child->id}' />";
				$html .= "<label for='c{$child->id}' class='label'><a href='/groups/{$child->id}'>{$child->name} languages</a></label>";
				$html .= recursiveRender($child);
				$html .= '</li>';
			}
		} else {
			$html .= "<li><a class='label' href='/languages/{$child->id}'>{$child->present()}</a></li>";
		}
	}

	return "<ul>$html</ul>";
}

@endphp

@extends('layout', ['title' => "{$group->name} languages"])

@section('title')
	<label>Group details:</label>
	<strong>{{ $group->name }} languages</strong>
@endsection

@include('components.show-icons', ['model' => $group])

@section('panel')
			<label class="label">Languages in this group
				@can('add content')
					(<a href="/groups/{{ $group->id }}/order/edit">reorder</a>)
				@endcan
			</label>
			<ul class="tree">
				<li>
					<input type="checkbox" checked="checked" id="c0" />
					<label class="label" for="c0">{{ $group->name }} languages</label>
					{!! recursiveRender($group) !!}
				</li>
			</ul>
@endsection

@section('content')
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
					{!! $group->parent->present('link') !!}
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
		<span class="label">Map</span>
		<alg-map :markers="{{ $group->allLanguages()->toJson() }}"></alg-map>
	</div>

	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $group->sources])
	</div>
@endsection