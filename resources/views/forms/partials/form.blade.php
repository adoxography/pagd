@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src = '/js/autosuggest_form.js'></script>
	<script src = '/js/datalist.js'></script>
@stop

<!-- Form Text Information -->
<fieldset>
	{{ Form::label('surfaceForm','Surface Form') }}
	{{ Form::text('surfaceForm',null,['placeholder' => 'The form as written in a text']) }}	
	{{ Form::label('phoneticForm','Phonetic Form') }}
	{{ Form::text('phoneticForm',null,['placeholder' => 'The Algonquianist phonetic transcription']) }}
	{{ Form::label('morphemicForm','Morphemic Form') }}
	{{ Form::text('morphemicForm',null,['placeholder' => 'The morphemes, separated by hyphens']) }}
</fieldset>

<!-- Lineage Information -->
<fieldset>
	{{ Form::label('language','Language') }}
	{{ Form::datalist(
		'language',
		$languages,
		[
			'visible' => isset($presetLanguage) ? $presetLanguage->name : null,
			'hidden'  => isset($presetLanguage) ? $presetLanguage->id   : null
		]
	) }}
	{{ Form::label('parent','Parent') }}
	{{ Form::autofill('parent',null,null,['placeholder' => 'Search for a parent form']) }}
</fieldset>

<!-- Syntax Information -->
<fieldset>
	<!-- Argument Information -->
	<fieldset class = 'arguments'>
		<legend>Arguments</legend>
		{{ Form::label('subject', 'Subject') }}
		{{ Form::datalist(
			'subject',
			$arguments,
			[],
			['visible' => ['name' => 'formType[subject][name]']]
		) }}
		{{ Form::label('primaryObject', 'P. Object') }}
		{{ Form::datalist(
			'primaryObject',
			$arguments,
			[],
			['visible' => ['name' => 'formType[primaryObject][name]', 'placeholder' => 'None']]
		) }}
		{{ Form::label('secondaryObject', 'S. Object') }}
		{{ Form::datalist(
			'secondaryObject',
			$arguments,
			[],
			['visible' => ['name' => 'formType[secondaryObject][name]', 'placeholder' => 'None']]
		) }}
	</fieldset>

	{{ Form::label('class','Class') }}
	{{ Form::datalist('class', $classes, [], ['visible' => ['name' => 'formType[class][name]']]) }}

	{{ Form::radioList('order', $orders, ['name' => 'formType[order][id]']) }}

	{{ Form::label('mood','Mood') }}
	{{ Form::datalist('mood', $moods, [], ['visible' => ['name' => 'formType[mood][name]']]) }}

	{{ Form::radioList('tense', $tenses, ['name' => 'formType[tense][id]']) }}
</fieldset>
<fieldset>
	{{ Form::radioList(
		'isAbsolute',
		[
			[
				'id'    => '',
				'value' => 'N/A'
			],
			[
				'id'    => '1',
				'value' => 'Absolute'
			],
			[
				'id'    => '0',
				'value' => 'Objective'
			]
		],
		[
			'name'   => 'formType[isAbsolute]',
			'legend' => 'Abs/Erg'
		]
	) }}
{{-- 	{{ Form::label('isAbsolute','Abs/Erg') }}
	{{ Form::select('isAbsolute', [
		'' => 'N/A',
		'1' => 'Absolute', 
		'0' => 'Objective'
	]) }} --}}
	{{ Form::label('isNegative','Negative') }}
	{{ Form::checkbox('isNegative','true') }}
	{{ Form::label('isDiminutive','Diminutive') }}
	{{ Form::checkbox('isDiminutive','true') }}
</fieldset>
<fieldset>
	{{ Form::submit('Submit') }}
</fieldset>

@section('footer')

<script>
	$(document).ready(function(){
		datalist('language');
		datalist('subject');
		datalist('primaryObject');
		datalist('secondaryObject');
		datalist('class');
		datalist('mood');
	});
</script>

@stop