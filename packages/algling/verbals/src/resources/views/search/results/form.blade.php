@extends('layout', ['Verb form search results'])

@section('title')
	Verb form search results
@endsection

@section('content')
	<table class="table">
		<thead>
			<tr>
				<th>
					Language
				</th>
				@foreach($structures as $structure)
				<th>
					<p>
						{{ $structure['subject']->name }}
						@if($structure['primaryObject'])
							-{{ $structure['primaryObject']->name }}
						@endif
						@if($structure['secondaryObject'])
							+{{ $structure['secondaryObject']->name }}
						@endif
						{{ $structure['class']->name }}
						{{ $structure['order']->name }}
						{{ $structure['mode']->name }}
						@if($structure['negative'] == 1)
							Negative
						@endif
						@if($structure['diminutive'] == 1)
							Diminutive
						@endif
					</p>
				</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($languages as $language)
				<?php
					$languageForms = $results->where('language_id', $language->id);
				?>
				<tr>
					<td>
						{{ $language->name }}
					</td>
					@foreach($structures as $structure)
						<?php
							$forms = $languageForms->where('structure.class_id',   $structure['class']->id)
												   ->where('structure.order_id',   $structure['order']->id)
												   ->where('structure.mode_id',    $structure['mode']->id)
												   ->where('structure.isNegative', $structure['negative'])
												   ->where('structure.isDiminutive', $structure['diminutive'])
												   ->where('structure.subject.person', $structure['subject']->person)
												   ->where('structure.subject.obviativeCode', $structure['subject']->obviativeCode);
							if(isset($structure['primaryObject'])) {
								$forms = $forms->where('structure.primaryObject.person', $structure['primaryObject']->person)
											   ->where('structure.primaryObject.obviativeCode', $structure['primaryObject']->obviativeCode);
							} else {
								$forms = $forms->where('structure.primaryObject_id', null);
							}
							if(isset($structure['secondaryObject'])) {
								$forms = $forms->where('structure.secondaryObject.person', $structure['secondaryObject']->person)
											   ->where('structure.secondaryObject.obviativeCode', $structure['secondaryObject']->obviativeCode);
							} else {
								$forms = $forms->where('structure.secondaryObject_id', null);
							}
						?>
						<td>
							@foreach($forms as $form)
								<p>
									{!! $form->present('link') !!}
									@if(isset($form->structure->head)
										|| (!isset($structure['subject']->number) && isset($form->structure->subject->number))
										|| (!isset($structure['primaryObject']->number) && isset($form->structure->primaryObject) && isset($form->structure->primaryObject->number))
										|| (!isset($structure['secondaryObject']->number) && isset($form->structure->secondaryObject) && isset($form->structure->secondaryObject->number)))
										<span class="alg-highlight">({!! $form->structure->present('arguments') !!})</span>
									@endif
									@if(isset($form->structure->isAbsolute))
										<span class="alg-highlight">
										@if($form->structure->isAbsolute === 1)
											(Absolute)
										@else
											(Objective)
										@endif
										</span>
									@endif
								</p>
							@endforeach
						</td>
					@endforeach
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection