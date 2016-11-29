@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src = '/js/formUtil.js'></script>
@stop

<fieldset>
	{{ Form::label('name','Name') }}
	{{ Form::text('name',null,['autocomplete' => "off", 'required' => 'required']) }}
	{{ Form::label('group','Group') }}
	{{ Form::datalist(
		'group', 
		$groups, 
		[
			'visible' => (isset($presetParent) ? $presetParent->group->name : null), 
			'hidden'  => (isset($presetParent) ? $presetParent->group->id   : null)
		], 
		[
			'visible' => [
				'required' => 'required', 
				'default'  => 'Eastern'
			]
		]
	) }}
	{{ Form::label('parent','Parent') }}
	{{ Form::datalist(
		'parent', 
		$parents, 
		[
			'visible' => (isset($presetParent) ? $presetParent->name : null), 
			'hidden'  => (isset($presetParent) ? $presetParent->id   : null)
		],
		[
			'visible' => [
				'required' => 'required',
				'default'  => 'Proto-Algonquian'
			]
		]
	) }}
</fieldset>
<fieldset>
	{{ Form::label('iso','ISO') }}
	{{ Form::text('iso',null,['autocomplete' => "off", 'required' => 'required']) }}
	{{ Form::label('algoCode', 'Algonquianist Code') }}
	{{ Form::text('algoCode',null,['autocomplete' => "off", 'required' => 'required']) }}
</fieldset>
<fieldset>
	{{ Form::submit('submit') }}
</fieldset>

@section('footer')
	<script>
		$(document).ready(function(){
			formUtil.initDatalists();
		});
	</script>
@stop