@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src="/js/formUtil.js"></script>
@stop

<fieldset>
	{{ Form::label('morphemeName','Morpheme') }}
	{{ Form::text('name', null, ['autocomplete' => 'off', 'required' => 'required']) }}
	{{ Form::label('gloss','Gloss') }}
	{{ Form::datalist('gloss',$glosses,[],['visible' => ['required' => 'required']]) }}

	{{ Form::label('slot','Slot') }}
	{{ Form::datalist('slot',$slots,[],['visible' => ['required' => 'required']]) }}
</fieldset>
<fieldset>
	{{ Form::label('language','Language') }}
	{{ Form::datalist(
		'language',
		$languages,
		[
			'visible' => isset($presetLanguage) ? $presetLanguage->name : null,
			'hidden'  => isset($presetLanguage) ? $presetLanguage->id   : null
		],
		[
			'visible' => [
				'required' => 'required',
				'default'  => 'Proto-Algonquian'
			]
		]
	) }}
	{{ Form::label('parent','Parent') }}
	{{ Form::text('parent') }}
	{{ Form::hidden('parent_id',null,['id' => 'parent_id']) }}
</fieldset>
<fieldset>
	{{ Form::label('allomorphyNotes','Allomorphy Notes') }}
	{{ Form::textarea('allomorphyNotes') }}
	{{ Form::label('historicalNotes','Historical Notes') }}
	{{ Form::textarea('historicalNotes') }}	
	{{ Form::label('comments','Comments') }}
	{{ Form::textarea('comments') }}
</fieldset>
<fieldset class = 'formButtons'>
	{{ Form::submit('Submit') }}
</fieldset>

@section('footer')
	<script src = "/js/autosuggest_morpheme.js"></script>
	<script>
		$(document).ready(function(){
			formUtil.initDatalists();
		});
	</script>
@stop