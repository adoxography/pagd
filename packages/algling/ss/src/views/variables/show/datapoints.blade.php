@extends('ss::variables.show')

@section('content')
	<table class="table" style="display: block;">
		<thead>
			<tr>
				<th>Language</th>
				<th>Value</th>
			</tr>
		</thead>
		<tbody>
			@foreach($languages as $language)
				<tr>
					<td>{!! $language->renderHTML() !!}</td>
					<td>
						<?php
							$index = $variable->datapoints->search(function($val) use ($language) {
								return $val->language_id == $language->id;
							});
						?>
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
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection