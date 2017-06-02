@extends('ss::variables.show')

@php
	$hasNoteColumn = $variable->datapoints->pluck('note')->contains(function($value, $key) {
		return $value;
	});
@endphp

@section('content')
	<div class="field">
		<span class="label">{{ $variable->description }}</span>
		<table class="table" style="display: block;">
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

					<tr>
						<td>{!! $language->renderHTML() !!}</td>
						<td>
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
						@if($hasNoteColumn)
							<td>
								{!! $variable->datapoints[$index]->note !!}
							</td>
						@endif
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>

	<div class="field">
		<span class="label">Essay</span>
		{!! $variable->essay ? replaceTags($variable->essay) : 'Coming soon' !!}
	</div>
@endsection