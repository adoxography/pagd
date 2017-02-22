<html>
	<head>
		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<style>
		html {
			overflow-x: scroll;
		}
		</style>
	</head>
	<body>
	<alg-paradigm-table inline-template>
	<div>
	<table class="table is-bordered">
		<thead>
			<tr>
				<th rowspan="3" colspan="2"></th>
				@foreach($data as $language => $orders)
					<?php 
						$span = 0;
						foreach($orders as $modes) {
							foreach($modes as $absobvs) {
								foreach($absobvs as $negatives) {
									foreach($negatives as $diminutives) {
										$span += count($diminutives);
									}
								}
							}
						}
					?>
					<th colspan="{{ $span }}" style="border-left: .2em solid #363636;">{{ $language }}</th>
				@endforeach
			</tr>
			<tr>
				@foreach($data as $language)
					@foreach($language as $order => $modes)
						<?php
							$span = 0;
							foreach($modes as $absobvs) {
								foreach($absobvs as $negatives) {
									foreach($negatives as $diminutives) {
										$span += count($diminutives);
									}
								}
							}
						?>
						<th colspan="{{ $span }}" style='{{ $loop->first ? "border-left: .2em solid #363636;" : "" }}'>{{ $order }}</th>
					@endforeach
				@endforeach
			</tr>
			<tr>
				@foreach($data as $orders)
					@foreach($orders as $modes)
						@foreach($modes as $mode => $absobvs)
							<?php
								$span = 0;
								foreach($absobvs as $negatives) {
									foreach($negatives as $diminutives) {
										$span += count($diminutives);
									}
								}
							?>
							<th colspan="{{ $span }}" style='{{ $loop->parent->first && $loop->first ? "border-left: .2em solid #363636;" : "" }}'>{{ $mode }}</th>
						@endforeach
					@endforeach
				@endforeach
			</tr>
			<tr>
				<th>Class</th><th>Arguments</th>
				@foreach($data as $orders)
					@foreach($orders as $modes)
						@foreach($modes as $absobvs)
							@foreach($absobvs as $absobv => $negatives)
								@foreach($negatives as $negative => $diminutives)
									@foreach($diminutives as $diminutive => $value)
										<th style='{{ $loop->parent->parent->parent->parent->first && $loop->parent->parent->parent->first && $loop->parent->parent->first && $loop->parent->first && $loop->first ? "border-left: .2em solid #363636;" : "" }}'>{{ trim("$absobv $negative $diminutive") }}</th>
									@endforeach
								@endforeach
							@endforeach
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
								@foreach($modes as $mode => $absobvs)
									@foreach($absobvs as $absobv => $negatives)
										@foreach($negatives as $negative => $diminutives)
											@foreach($diminutives as $diminutive => $nulls)
												<?php 
													$lookup = [];

													foreach($forms as $form) {
														if($form->language->name == $language && $form->formType->order->name == $order && $form->formType->mode->name == $mode && $form->formType->absoluteStatus === $absobv && $form->formType->negativeStatus === $negative && $form->formType->diminutiveStatus === $diminutive) {
															$lookup[] = $form;
														}
													}

												?>

												@if(isset($lookup[0]) && $lookup[0]->placed && !$form->distant)
												@else
													<td rowspan={{ $lookup[0]->span or "1" }} style='{{ $loop->parent->parent->parent->parent->first && $loop->parent->parent->parent->first && $loop->parent->first && $loop->parent->parent->first && $loop->first ? "border-left: .2em solid #363636;" : "" }}'>
														@if(count($lookup) > 0)
															@foreach($lookup as $form)
																<p><a href='/forms/{{ $form->id }}'><nobr>{{ $form->surfaceForm }}</nobr>{!! isset($form->diffClass) ? "<span style='margin-left: .25rem; color: red;'><nobr>({$form->diffClass})</nobr></span>" : "" !!}</a></p>
																<?php
																	$form->placed = true;
																?>
																@if($showMorphology)
																	{!! $form->printMorphemes() !!}
																@endif
															@endforeach
														@endif
													</td>
												@endif
											@endforeach
										@endforeach
									@endforeach
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
	</body>
</html>