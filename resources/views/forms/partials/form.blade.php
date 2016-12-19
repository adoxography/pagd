@section('header')
	<script src = '/js/formUtil.js'></script>
	<script src = 'https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js'></script>
@stop

<!-- Form Text Information -->
<fieldset>
	{{ Form::label('surfaceForm','Surface Form') }}
	{{ Form::text('surfaceForm',null,['placeholder' => 'The form as written in a text', 'autocomplete' => "off", 'required' => 'required']) }}	
	{{ Form::label('phoneticForm','Phonetic Form') }}
	{{ Form::text('phoneticForm',null,['placeholder' => 'The Algonquianist phonetic transcription (Leave blank if unknown or unclear)', 'autocomplete' => "off"]) }}
	{{ Form::label('morphemicForm','Morphemic Form') }}
	{{ Form::text('morphemicForm',null,['placeholder' => 'The morphemes, separated by hyphens (Leave blank if unknown or unclear)', 'autocomplete' => "off"]) }}
	@include('morphemes.partials.create-otg')
</fieldset>

<!-- Lineage Information -->
<fieldset>
	{{ Form::label('language','Language') }}
	{{ Form::datalist('language', $languages, ['visible' => isset($presetLanguage) ? $presetLanguage->name : null, 'hidden'  => isset($presetLanguage) ? $presetLanguage->id : null], ['visible' => ['required' => 'required', 'default' => 'Proto-Algonquian']]) }}
	{{ Form::label('parent','Parent') }}
	{{ Form::autofill('parent',null,null,['placeholder' => 'Search for a parent form']) }}
</fieldset>

<!-- Syntax Information -->
<fieldset>
	<!-- Argument Information -->
	<fieldset class = 'arguments'>
		<legend>Arguments</legend>
		{{ Form::label('subject', 'Subject') }}
		{{ Form::datalist('subject', $arguments, ['hidden' => old('formType.subject_id')], ['visible' => ['name' => 'formType[subject][name]', 'required' => 'required', 'default' => '1s'], 'hidden' => ['name' => 'formType[subject_id]']]) }} <!-- Maybe remove this in production -->
		{{ Form::label('primaryObject', 'P. Object') }}
		{{ Form::datalist('primaryObject', $arguments, ['hidden' => old('formType.primaryObject_id')], ['visible' => ['name' => 'formType[primaryObject][name]', 'placeholder' => 'None'], 'hidden' => ['name' => 'formType[primaryObject_id]']]) }}
		{{ Form::label('secondaryObject', 'S. Object') }}
		{{ Form::datalist('secondaryObject', $arguments, ['hidden' => old('formType.secondaryObject_id')], ['visible' => ['name' => 'formType[secondaryObject][name]', 'placeholder' => 'None'], 'hidden' => ['name' => 'formType[secondaryObject_id]']]) }}
	</fieldset>

	{{ Form::radioList('class', $classes, isset($form) ? $form->formType->class_id : null,  ['name' => 'formType[class_id]']) }}
	{{ Form::radioList('order', $orders, isset($form)  ? $form->formType->order->id : null, ['name' => 'formType[order_id]']) }}

	{{ Form::label('mode','Mode') }}
	{{ Form::datalist('mode', $modes, ['hidden' => old('formType.mode_id')], ['visible' => ['name' => 'formType[mode][name]', 'required' => 'required', 'default' => 'Indicative'], 'hidden' => ['name' => 'formType[mode_id]']]) }}
</fieldset>
<fieldset>
	{{ Form::radioList(
		'isAbsolute',
		[
			['id'    => 'null', 'value' => 'N/A'],
			['id'    => 1,    'value' => 'Absolute'],
			['id'    => 0,    'value' => 'Objective']
		],
		isset($form) ? $form->formType->isAbsolute : null,
		[
			'name'   => 'formType[isAbsolute]',
			'legend' => 'Abs/Erg'
		]
	) }}

	{{ Form::label('isNegative','Negative') }}
	{{ Form::checkbox('isNegative', 1, isset($form) ? $form->formType->isNegative : null, ['name' => 'formType[isNegative]']) }}
	{{ Form::label('isDiminutive','Diminutive') }}
	{{ Form::checkbox('isDiminutive', 1, isset($form) ? $form->formType->isDiminutive : null, ['name' => 'formType[isDiminutive]']) }}
</fieldset>
<fieldset>
	@include('sources.partials.select_source')
</fieldset>
<fieldset>
	{{ Form::submit('Submit') }}
</fieldset>

@section('footer')

<script>
	$(document).ready(function(){
		formUtil.initAutocomplete('parent','forms');
		formUtil.initDatalists();
		formUtil.initRadios();

		$('.remove-source-button').click(function(){
			$(this).parent().remove();
		});
	});
</script>

@stop