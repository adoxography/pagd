<!doctype html>
<html style="background-color: white;">
	<head>
		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />

		<style>
		html {
			overflow-x: scroll;
		}
		</style>
	</head>
	<body>
		<div id="root">
			<alg-paradigm-table morphemes-on="{{ $showMorphology }}" inline-template>
				<div>
					<nav class="level" style="position: fixed;">
						<div class="level-left">
							<div class="level-item">
								<a class="button" @click="toggleShow">Show/Hide Morphology</a>
							</div>
							<div class="level-item">
								<form style="margin: 0;" method="GET" action="/search">
									<input type="hidden" name="searchType" value="paradigm">
									<input type="hidden" name="preset" value="{{ $params or '' }}">
									<button class="button" type="submit">Refine</button>
								</form>
							</div>
						</div>
					</nav>
					<table class="table is-bordered" style="display: block; padding-top: 2.5rem;">
						{!! $search->renderHeaders(3) !!}
						<tbody>
							@foreach($rows as $class => $subjects)
								<tr style="border-top: .2em solid #363636;">
									<th rowspan="{{ count($subjects) }}">{{ $class }}</th>

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

																				{{-- The form --}}
																				<p>
																					@if($form instanceof \App\Form)
																						<a href='/forms/{{ $form->id }}'>
																					@else
																						<a href="/empty-forms/{{ $form->id }}">
																					@endif
																					<nobr>{{ $form->surfaceForm or "Empty" }}</nobr>
																					{!! isset($form->diffClass) ? "<span style='margin-left: .25rem; color: red;'><nobr>({$form->diffClass})</nobr></span>" : "" !!}
																					</a>
																				</p>
																				<?php $form->placed = true; ?>

																				{{-- The morphology --}}
																				@if($form instanceof \App\Form)
																				<div v-show="show">
																					{!! $form->printMorphemes() !!}
																				</div>
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
		</div>
		<script src="{{ mix("/js/app.js") }}"></script>
	</body>
</html>