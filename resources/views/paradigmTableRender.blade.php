@extends('layout')

@section('content')
	<table class="table is-bordered">
		<thead>
			<tr>
				<th rowspan="2" colspan="2">
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
				@foreach($data as $language)
					@foreach($language as $order => $modes)
						<th colspan="{{ count($modes) }}">{{ $orderDictionary->where('id', $order)->first()['name'] }}</th>
					@endforeach
				@endforeach
			</tr>
			<tr>
				<th>Class</th><th>Subject</th>
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
				<tr style="border-top: .2em solid #363636;">
					<?php
						$span = 0;
						foreach($subjectPersons as $subjectPerson) {
							$span += count($subjectPerson);
						}
					?>
					<th rowspan="{{ $span }}">{{ $classDictionary->where('id', $class)->first()['name'] }}</th>

					@foreach($subjectPersons as $subjectPerson => $subjectNumbers)

						@foreach($subjectNumbers as $subjectNumber => $value)
							<?php $personLoop = $loop; ?>

							<th>{{ $personDictionary[$subjectPerson / 10] . $obvDictionary[$subjectPerson % 10] }}@if($subjectPerson / 10 != 4){{ $numberDictionary[$subjectNumber] }}@endif</th>

							@foreach($data as $language => $orders)
								@foreach($orders as $order => $modes)
									@foreach($modes as $mode => $value)

										@if($personLoop->first)
											<?php $forms[$language][$order][$mode][$class][$subjectPerson] = $curr = $hashTable->search($language, $order, $mode, $class, $subjectPerson, 0); ?>
											@if(count($curr) > 0)
												<td rowspan="{{ count($rows[$class][$subjectPerson]) }}">
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
												@foreach($hashTable->search($language, $order, $mode, $class, $subjectPerson, $subjectNumber) as $form)
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
@stop