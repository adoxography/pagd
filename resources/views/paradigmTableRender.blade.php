@extends('layout')

@section('table')
	<alg-paradigm-table inline-template>
	<div>
	<table class="table is-bordered">
		<thead>
			<tr>
				<th rowspan="2" colspan="2"></th>
				@foreach($data as $language => $orders)
					<?php 
						$span = 0;
						foreach($orders as $modes) {
							$span += count($modes);
						}
					?>
					<th colspan="{{ $span }}" style="border-left: .2em solid #363636;">{{ $language }}</th>
				@endforeach
			</tr>
			<tr>
				@foreach($data as $language)
					@foreach($language as $order => $modes)
						<th colspan="{{ count($modes) }}" style='{{ $loop->first ? "border-left: .2em solid #363636;" : "" }}'>{{ $order }}</th>
					@endforeach
				@endforeach
			</tr>
			<tr>
				<th>Class</th><th>Arguments</th>
				@foreach($data as $orders)
					@foreach($orders as $modes)
						@foreach($modes as $mode => $value)
							<th style='{{ $loop->parent->first && $loop->first ? "border-left: .2em solid #363636;" : "" }}'>{{ $mode }}</th>
						@endforeach
					@endforeach
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($rows as $class => $subjects)
				<tr style="border-top: .2em solid #363636;">
					<?php
						$span = count($subjects);
					?>

					<th rowspan="{{ $span }}">{{ $class }}</th>

					@foreach($subjects as $subject => $forms)
						<td><nobr>{{ $subject }}</nobr></td>

						@foreach($data as $language => $orders)
							@foreach($orders as $order => $modes)
								@foreach($modes as $mode => $nulls)
									<?php 
										$lookup = [];

										foreach($forms as $form) {
											if($form->language->name == $language && $form->formType->order->name == $order && $form->formType->mode->name == $mode) {
												$lookup[] = $form;
											}
										}

									?>

									@if(isset($lookup[0]) && $lookup[0]->placed && !$form->distant)
									@else
										<td rowspan={{ $lookup[0]->span or "1" }} style='{{ $loop->parent->first && $loop->first ? "border-left: .2em solid #363636;" : "" }}'>
											@if(count($lookup) > 0)
												@foreach($lookup as $form)
													<p><a href='/forms/{{ $form->id }}'><nobr>{{ $form->name }}</nobr>{!! isset($form->diffClass) ? "<span style='margin-left: .25rem; color: red;'><nobr>({$form->diffClass})</nobr></span>" : "" !!}</a></p>
													<?php
														$form->placed = true;
													?>
												@endforeach
											@endif
										</td>
									@endif
								@endforeach
							@endforeach
						@endforeach

						</tr><tr>
					@endforeach
				</tr>
			@endforeach
		</tbody>
	</table>
	</div>
	</alg-paradigm-table>
@stop