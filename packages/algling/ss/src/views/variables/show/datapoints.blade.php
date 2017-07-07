@php

function recursiveRender($group, $variable, $colorAssignments) {
	$html = '';

	$group->load(['languages.datapoints', 'languages.datapoints.variable', 'languages.datapoints.value']);
	$data = $group->directDescendants()->sortBy('position');

	foreach($data as $child) {

		if($child instanceof App\Group) {
			if($child->languages->count() > 0 && ($child->hasVariable($variable) || Auth::user() && Auth::user()->permissions->canEdit)) {
				$html .= '<li>';
				$html .= "<input type='checkbox' ";

				if($child->hasVariable($variable)) {
					$html .= "checked='checked' ";
				}

				$html .= "id='c{$child->id}' />";
				$html .= "<label for='c{$child->id}' class='label'><a href='/groups/{$child->id}'>{$child->name} languages</a></label>";
				$html .= recursiveRender($child, $variable, $colorAssignments);
				$html .= '</li>';
			}
		} else if($child->hasVariable($variable)) {
			$datapoint = $child->getVariable($variable);
			$color = $colorAssignments[$datapoint->value->name];

			$html .= '<li><span class="label">';

			$html .= '<span class="icon is-small" style="margin-right: .2em;"><i class="fa fa-circle" style="color: #' . $color . '"></i></span>';
			$html .= $child->present()->as('link') . ':&nbsp';
			$html .= '<a style="color: #' . $color . '" href="/datapoints/' . $datapoint->id . '">' . $datapoint->value->name . '</a>';

			if($datapoint->note) {
				$html .= '&nbsp(' . strip_tags($datapoint->note) . ')';
			}

			$html .= '</span></li>';
		} else if(Auth::user() && Auth::user()->permissions->canEdit) {
			$html .= '<li><span class="label">';
			$html .= $child->present()->as('link');
			$html .= '&nbsp(<a href="/variables/' . $variable->id . '/languages/' . $child->id . '/addDatapoint">Add</a>)';
			$html .= '</span></li>';
		}
	}

	return "<ul>$html</ul>";
}

@endphp

@extends('ss::variables.show')

@php
	$hasNoteColumn = $variable->datapoints->pluck('note')->contains(function($value, $key) {
		return $value;
	});
@endphp

@section('content')
	<div class="field">
		<span class="label">{{ $variable->description }}</span>

		<ul class="tree">
			<li>
				<input type="checkbox" checked="checked" id="c0" />
				<label class="label" for="c0">Algonquian languages</label>
				{!! recursiveRender(App\Group::first(), $variable, $colorAssignments) !!}
			</li>
		</ul>

{{-- 		<table class="table" style="display: block;">
			<thead>
				<tr>
					<th>Language</th>
					<th>Value</th>
					@if($hasNoteColumn)
						<th>Note</th>
					@endif
				</tr>
			</thead>
			<tbody>
				@foreach($languages as $language)
					@php
						$index = $variable->datapoints->search(function($val) use ($language) {
							return $val->language_id == $language->id;
						});
					@endphp

					@if($index !== false || (Auth::user() && Auth::user()->permissions->canEdit))
					<tr>
						<td>{!! $language->renderHTML() !!}</td>
						<td>
							@if($index !== false)
								<span class="icon is-small">
									<i class="fa fa-circle" style="color: #{{ $colorAssignments[$variable->datapoints[$index]->value->name] }};"></i>
								</span>
								<a href="/datapoints/{{ $variable->datapoints[$index]->id }}">
									{{ $variable->datapoints[$index]->value->name }}
								</a>
							@else
								<span class="icon is-small">
									 Placeholder
								</span>
								Not entered
								@if(Auth::user() && Auth::user()->permissions->canEdit)
									(<a href="/variables/{{ $variable->id }}/languages/{{ $language->id }}/addDatapoint">Add</a>)
								@endif
							@endif
						</td>
						@if($hasNoteColumn)
							<td>
								@if($index !== false)
									{!! $variable->datapoints[$index]->note !!}
								@endif
							</td>
						@endif
					</tr>
					@endif
				@endforeach
			</tbody>
		</table>
	</div> --}}

	<div class="field">
		<span class="label">Essay</span>
		{!! $variable->essay ? replaceTags($variable->essay) : 'Coming soon' !!}
	</div>
@endsection