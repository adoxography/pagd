@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src = '/js/formUtil.js'></script>
@stop

<!-- Form Text Information -->
<fieldset>
	{{ Form::label('surfaceForm','Surface Form') }}
	{{ Form::text('surfaceForm',null,['placeholder' => 'The form as written in a text', 'autocomplete' => "off", 'required' => 'required']) }}	
	{{ Form::label('phoneticForm','Phonetic Form') }}
	{{ Form::text('phoneticForm',null,['placeholder' => 'The Algonquianist phonetic transcription', 'autocomplete' => "off"]) }}
	{{ Form::label('morphemicForm','Morphemic Form') }}
	{{ Form::text('morphemicForm',null,['placeholder' => 'The morphemes, separated by hyphens', 'autocomplete' => "off"]) }}
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
		{{ Form::datalist('subject', $arguments, [], ['visible' => ['name' => 'formType[subject][name]', 'required' => 'required', 'default' => '1s']]) }} <!-- Maybe remove this in production -->
		{{ Form::label('primaryObject', 'P. Object') }}
		{{ Form::datalist('primaryObject', $arguments, [], ['visible' => ['name' => 'formType[primaryObject][name]', 'placeholder' => 'None']]) }}
		{{ Form::label('secondaryObject', 'S. Object') }}
		{{ Form::datalist('secondaryObject', $arguments, [], ['visible' => ['name' => 'formType[secondaryObject][name]', 'placeholder' => 'None']]) }}
	</fieldset>

	{{ Form::label('class','Class') }}
	{{ Form::datalist('class', $classes, [], ['visible' => ['name' => 'formType[formClass][name]', 'required' => 'required', 'default' => 'AI']]) }}

	{{ Form::radioList('order', $orders, isset($form) ? $form->formType->order->id : null, ['name' => 'formType[order][id]']) }}

	{{ Form::label('mode','Mode') }}
	{{ Form::datalist('mode', $modes, [], ['visible' => ['name' => 'formType[mode][name]', 'required' => 'required', 'default' => 'Indicative']]) }}
</fieldset>
<fieldset>
	{{ Form::radioList(
		'isAbsolute',
		[
			['id'    => null, 'value' => 'N/A'],
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
	{{ Form::submit('Submit') }}
</fieldset>

@section('footer')

<script>
	$(document).ready(function(){
		formUtil.initAutocomplete('parent','forms');
		formUtil.initDatalists();
		formUtil.initRadios();
	});
</script>

@stop