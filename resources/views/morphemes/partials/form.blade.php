@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src="/js/datalist.js"></script>
@stop

<fieldset>
	{{ Form::label('morphemeName','Morpheme') }}
	{{ Form::text('name', null, ['autocomplete' => 'off']) }}
	{{ Form::label('gloss','Gloss') }}
	{{ Form::datalist('gloss',$glosses) }}

	{{ Form::label('slot','Slot') }}
	{{ Form::datalist('slot',$slots) }}
</fieldset>
<fieldset>
	{{ Form::label('language','Language') }}
	{{ Form::datalist(
		'language',
		$languages,
		isset($presetLanguage) ? $presetLanguage->name : null,
		isset($presetLanguage) ? $presetLanguage->id   : null
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

@include('footer')
@section('footer')
	<script src = "/js/autosuggest_morpheme.js"></script>
	<script>
		$(document).ready(function(){
			datalist('slot');
			datalist('gloss');
			datalist('language');
		});
	</script>
@stop