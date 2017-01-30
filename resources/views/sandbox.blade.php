@extends('layout')

@section('header')
@stop

@section('content')
	<table class="table is-bordered">
		<thead>
			<tr>
				<th></th><th></th><th></th>
				@foreach($data as $key => $value)
					<?php 
						$span = 0;
						foreach($value as $subvalue) {
							$span += count($subvalue);
						}
					?>
					<th colspan="{{ $span }}">{{ $key }}</th>
				@endforeach
			</tr>
			<tr>
				<th></th><th></th><th></th>
				@foreach($data as $language)
					@foreach($language as $key => $value)
						<th colspan="{{ count($value) }}">{{ $key }}</th>
					@endforeach
				@endforeach
			</tr>
			<tr>
				<th>Class</th><th>Person</th><th>Number</th>
				@foreach($data as $language)
					@foreach($language as $order)
						@foreach($order as $key => $value)
							<th>{{ $key }}</th>
						@endforeach
					@endforeach
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($rows as $class => $subjectPersons)
				<tr>
					<?php
						$span = 0;
						foreach($subjectPersons as $subjectPerson) {
							$span += count($subjectPerson);
						}
					?>
					<td rowspan="{{ $span }}">{{ $class }}</td>

					@foreach($subjectPersons as $subjectPerson => $subjectNumbers)
						<td rowspan="{{ count($subjectNumbers) }}">{{ $subjectPerson }}</td>

						@foreach($subjectNumbers as $subjectNumber => $value)
							<td>{{ $subjectNumber }}</td>

							@for($i = 0; $i < 8; $i++)
								<td></td>
							@endfor

							</tr>

							@if(!$loop->last)
							<tr>
							@endif
						@endforeach
					@endforeach
				</tr>
			@endforeach
		</tbody>
	</table>
	{{-- {{ dd($data) }} --}}
@stop

@section('footer')
@stop