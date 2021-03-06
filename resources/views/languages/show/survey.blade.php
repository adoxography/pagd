@extends('languages/show')

@section('content')
	<alg-tabs>
		@foreach($types as $type)
			<alg-tab name="{{ $type->name }}" {{ $loop->first ? 'selected="selected"' : ''}}>
				<table class="table" style="display: block;">
					<thead>
						<tr>
							<th>Variable</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						@foreach($type->variables as $variable)
							@php
								$index = $language->datapoints->search(function($val) use ($variable) {
									return $val->variable_id == $variable->id;
								});
							@endphp

							@if($index !== false || (Auth::user() && Auth::user()->hasPermissionTo('add content')))
								<tr>
									<td><a href="/variables/{{ $variable->id }}">{{ $variable->name }}</a></td>
									<td>
										@if($index !== false)
											<a href="/datapoints/{{ $language->datapoints[$index]->id }}">
												{{ $language->datapoints[$index]->value->name }}
											</a>
										@else
											Not entered
											@can('add content')
												(<a href="/variables/{{ $variable->id }}/languages/{{ $language->id }}/addDatapoint">Add</a>)
											@endcan
										@endif
									</td>
								</tr>
							@endif
						@endforeach
					</tbody>
				</table>
			</alg-tab>
		@endforeach
	</alg-tabs>
@endsection