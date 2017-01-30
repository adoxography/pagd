@extends('layout')

@section('header')
@stop

@section('content')
	<table class="table is-bordered">
		<thead>
			<tr>
				<th></th><th></th><th></th>
				@foreach($data as $language => $orders)
					<?php 
						$span = 0;
						foreach($orders as $modes) {
							$span += count($modes);
						}
					?>
					<th colspan="{{ $span }}">{{ $languageDictionary->where('id', $language)->first()['name'] }}</th>
				@endforeach
			</tr>
			<tr>
				<th></th><th></th><th></th>
				@foreach($data as $language)
					@foreach($language as $order => $modes)
						<th colspan="{{ count($modes) }}">{{ $orderDictionary->where('id', $order)->first()['name'] }}</th>
					@endforeach
				@endforeach
			</tr>
			<tr>
				<th>Class</th><th>Person</th><th>Number</th>
				@foreach($data as $orders)
					@foreach($orders as $modes)
						@foreach($modes as $mode => $value)
							<th>{{ $modeDictionary->where('id', $mode)->first()['name'] }}</th>
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
							<?php $personLoop = $loop; ?>

							<td>{{ $subjectNumber }}</td>

							@foreach($data as $language => $orders)
								@foreach($orders as $order => $modes)
									@foreach($modes as $mode => $value)

										@if($personLoop->first)
											<?php $forms[$language][$order][$mode][$class][$subjectPerson] = $curr = $hashTable->search($language, $order, $mode, 1, $subjectPerson, 0); ?>
											@if(count($curr) > 0)
												<td rowspan="2">
												@foreach($curr as $form)
													<p><a href="/forms/{{$form->id}}">{{ $form->surfaceForm }}</a></p>
												@endforeach
												</td>
											@else
												<?php unset($forms[$language][$order][$mode][$class][$subjectPerson]); ?>
											@endif
										@endif

										@if(!isset($forms[$language][$order][$mode][$class][$subjectPerson]))
											<td>
										@foreach($hashTable->search($language, $order, $mode, 1, $subjectPerson, $subjectNumber) as $form)
											<p><a href="/forms/{{$form->id}}">{{ $form->surfaceForm }}</a></p>
										@endforeach
											</td>
										@endif
									@endforeach
								@endforeach
							@endforeach

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