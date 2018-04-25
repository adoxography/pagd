@extends('layout', ['title' => 'Verb paradigm search results'])

@section('title')
	Verb paradigm search results
@endsection

@section('content')
	<alg-paradigm-table morphemes-on="{{ $showMorphology }}" has-morphemes="{{ $hasMorphemes }}" inline-template v-cloak>
		<div class="paradigm-results">
			<nav class="level">
				<div class="level-left">
					<div class="level-item">
						<a class="button" @click="toggleShow" :disabled="!hasMorphemes">Show/Hide Morphology</a>
					</div>
					<div class="level-item">
						<form style="margin: 0;" method="GET" action="/verbs/search/paradigm">
							<input type="hidden" name="preset" value="{{ $params or '' }}">
							<button class="button" type="submit">Refine</button>
						</form>
					</div>
				</div>
			</nav>
			<div class="paradigm-container">
				<table class="table is-bordered">
					{!! $search->renderHeaders() !!}
					<tbody>
						@foreach($rows as $class => $subjects)
							<tr style="border-top: 2px solid #363636;">
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
																		&& $form->structure->order->name == $order['name']
																		&& $form->structure->mode->name  == $mode['name']
																		&& $form->structure->absoluteStatus === $absobj['name']
																		&& $form->structure->negativeStatus === $negative['name']
																		&& $form->structure->diminutiveStatus === $diminutive['name']) {
																		$lookup[] = $form;
																	}
																}

															?>

															@if(isset($lookup[0]) && $lookup[0]->placed && !$form->distant)
															@else
																<td rowspan={{ $lookup[0]->span or "1" }} style='{{ $loop->parent->parent->parent->parent->first && $loop->parent->parent->parent->first && $loop->parent->first && $loop->parent->parent->first && $loop->first ? "border-left: 2px solid #363636;" : "" }}'>
																	@if(count($lookup) > 0)
																		@foreach($lookup as $form)
																			<p>
																				{!! $form->present('link') !!}

																				@if (isset($form->diffClass) || isset($form->structure->head))
																					<span style='margin-left: .25rem;' class='alg-highlight'>
																						<nobr>({!! $form->structure->present('arguments') !!})</nobr>
																					</span>
																				@endif
																			</p>
																			{{-- The form --}}
{{-- 																			<p>
																				@if($form instanceof Algling\Verbals\Models\Form)
																					<a href='/forms/{{ $form->id }}'>
																				@else
																					<a href="/empty-forms/{{ $form->id }}">
																				@endif
																					<nobr>{{ $form->surfaceForm or "No form" }}</nobr>
																				</a>
																				{!! isset($form->diffClass) || isset($form->structure->head) ? "<span style='margin-left: .25rem;' class='alg-highlight'><nobr>(".$form->structure->renderArguments().")</nobr></span>" : "" !!}
																			</p> --}}
																			<?php $form->placed = true; ?>

																			{{-- The morphology --}}
																			@if($form instanceof Algling\Verbals\Models\Form)
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

			<br>
			<p>
				Sources for forms in this paradigm:
				@foreach($sources as $source)
					@php
						$output = $source->present('link');

						if(!$loop->last) {
							$output .= ';';
						}
					@endphp

					{!! $output !!}
				@endforeach
			</p>
		</div>
	</alg-paradigm-table>

@endsection
