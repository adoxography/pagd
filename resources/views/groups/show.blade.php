@php
function recursiveRender($group) {
	$html = '';

	$data = $group->directDescendants()->sortBy('position');

	foreach($data as $child) {

		if($child instanceof App\Models\Group) {
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
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Group details</h2>
<h1 class="title is-4">
    {!! $group->present() !!} languages
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $group, 'namespace' => 'groups'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-2">
	<label class="label" style="padding-top: .95em">Languages in this group
		@can('add content')
        <a href="/groups/{{ $group->id }}/order/edit" class="icon" title="reorder">
            <i class="fa fa-sort"></i>
        </a>
		@endcan
	</label>
	<ul class="tree">
		<li>
			<input type="checkbox" checked="checked" id="c0" />
			<label class="label" for="c0">{{ $group->name }} languages</label>
			{!! recursiveRender($group) !!}
		</li>
	</ul>
</div>

<div class="column">
    <div class="details">
        @isset($group->parent)
        <div class="detail-row">
            <label class="detail-label">Parent group</label>
            <div class="detail-value">
                {!! $group->parent->present('link') !!}
            </div>
        </div>
        @endisset

        @isset($group->publicNotes)
        <div class="detail-row">
            <label class="detail-label">Notes</label>
            <div class="detail-value">
                {!! replaceTags($group->publicNotes) !!}
            </div>
        </div>
        @endisset

        @if(isset($group->privateNotes) && Auth::user() && Auth::user()->can('add content'))
        <div class="detail-row">
            <label class="detail-label">Private notes</label>
            <div class="detail-value">
                {!! replaceTags($group->privateNotes) !!}
            </div>
        </div>
        @endif

        <div class="detail-row">
            <label class="detail-label">Map</label>
            <div class="detail-value">
                <em>(Centre of the area in which the language has most recently been spoken)</em>
                <alg-map :markers="{{ $group->allLanguages()->toJson() }}"></alg-map>
            </div>
        </div>

        <div class="field">
            <span class="label">Sources</span>
            @include('components.model.sourcelist', ['sources' => $group->sources])
        </div>
    </div>
</div>
@endsection
