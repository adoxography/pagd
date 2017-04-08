@extends('layout')

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
							$forms = $languageForms->where('formType.class_id',   $structure['class']->id)
												   ->where('formType.order_id',   $structure['order']->id)
												   ->where('formType.mode_id',    $structure['mode']->id)
												   ->where('formType.isNegative', $structure['negative'])
												   ->where('formType.isDiminutive', $structure['diminutive'])
												   ->where('formType.subject.person', $structure['subject']->person)
												   ->where('formType.subject.obviativeCode', $structure['subject']->obviativeCode);
							if(isset($structure['primaryObject'])) {
								$forms = $forms->where('formType.primaryObject.person', $structure['primaryObject']->person)
											   ->where('formType.primaryObject.obviativeCode', $structure['primaryObject']->obviativeCode);
							} else {
								$forms = $forms->where('formType.primaryObject_id', null);
							}
							if(isset($structure['secondaryObject'])) {
								$forms = $forms->where('formType.secondaryObject.person', $structure['secondaryObject']->person)
											   ->where('formType.secondaryObject.obviativeCode', $structure['secondaryObject']->obviativeCode);
							} else {
								$forms = $forms->where('formType.secondaryObject_id', null);
							}
						?>
						<td>
							@foreach($forms as $form)
								<p>
									<a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a>
									@if(isset($form->formType->head)
										|| (!isset($structure['subject']->number) && isset($form->formType->subject->number))
										|| (!isset($structure['primaryObject']->number) && isset($form->formType->primaryObject) && isset($form->formType->primaryObject->number))
										|| (!isset($structure['secondaryObject']->number) && isset($form->formType->secondaryObject) && isset($form->formType->secondaryObject->number)))
										<span class="alg-highlight">({!! $form->formType->renderArguments() !!})</span>
									@endif
									@if(isset($form->formType->isAbsolute))
										<span class="alg-highlight">
										@if($form->formType->isAbsolute === 1)
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