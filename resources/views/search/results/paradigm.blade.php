@extends('layout')

@section('content')
	<alg-paradigm-table morphemes-on="{{ $showMorphology }}" inline-template v-cloak>
		<div>
			<nav class="level">
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
			<div class="paradigm-container">
				<table class="table is-bordered" style="display: block;">
					{!! $search->renderHeaders() !!}
					<tbody>
						@foreach($rows as $class => $subjects)
							<tr style="border-top: .2em solid #363636;">
								<th rowspan="{{ count($subjects) }}">{{ $class }}</th>

								@foreach($subjects as $subject => $forms)
									<td><nobr>{{ $subject }}</nobr></td>

									@foreach($data as $language)
										@foreach($language['subheaders'] as $order)
											@foreach($order['subheaders'] as $mode)
												@foreach($mode['subheaders'] as $absobj)
													@foreach($absobj['subheaders'] as $negative)
														@foreach($negative['subheaders'] as $diminutive)
															<?php 
																$lookup = [];

																foreach($forms as $form) {
																	if($form->language->name == $language['name']
																		&& $form->formType->order->name == $order['name']
																		&& $form->formType->mode->name  == $mode['name']
																		&& $form->formType->absoluteStatus === $absobj['name']
																		&& $form->formType->negativeStatus === $negative['name']
																		&& $form->formType->diminutiveStatus === $diminutive['name']) {
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
																					<nobr>{{ $form->surfaceForm or "No form" }}</nobr>
																				</a>
																				{!! isset($form->diffClass) || isset($form->formType->head) ? "<span style='margin-left: .25rem;' class='alg-highlight'><nobr>(".$form->formType->renderArguments().")</nobr></span>" : "" !!}
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
		</div>
	</alg-paradigm-table>

@endsection 