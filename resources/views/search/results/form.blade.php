@extends('layout')

@section('content')
	<table class="table">
		<thead>
			<tr>
				<th>
					Structure
				</th>
				@foreach($languages as $language)
				<th>
					{{ $language->name }}
				</th>
				@endforeach
			</tr>
		</thead>
		<tbody>
			@foreach($structures as $structure)
			<?php
				$forms = $results->where('formType.subject_id', $structure['subject']->id)
								 ->where('formType.class_id',   $structure['class']->id)
								 ->where('formType.order_id',   $structure['order']->id)
								 ->where('formType.mode_id',    $structure['mode']->id);
				if($structure['primaryObject']) {
					$forms = $results->where('formType.primaryObject_id', $structure['primaryObject']->id);
				}
				if($structure['secondaryObject']) {
					$forms = $results->where('formType.secondaryObject_id', $structure['secondaryObject']->id);
				}
			?>
			<tr>
				<td>
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
					</p>
				</td>
				@foreach($languages as $language)
				<?php $languageForms = $forms->where('language_id', $language->id); ?>
				<td>
					@foreach($languageForms as $form)
						<p>
							<a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a>
						</p>
					@endforeach
				</td>
				@endforeach
			</tr>
			@endforeach
		</tbody>
	</table>
@endsection