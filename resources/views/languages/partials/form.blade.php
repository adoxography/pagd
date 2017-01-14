@section('header')
	<script src = '/js/formUtil.js'></script>
@stop

{{ Form::algLabel('name') }}
{{ Form::algText('name', null, ['autocomplete' => 'off', 'required' => 'required']) }}
{{ Form::algLabel('group','Group') }}
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
			'default'  => 'Plains'
		]
	]
) }}
{{ Form::algLabel('parent') }}
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
{{ Form::algLabel('iso', 'ISO') }}
{{ Form::algText('iso',null,['autocomplete' => "off", 'required' => 'required']) }}
{{ Form::algLabel('algoCode', 'Algonquianist Code') }}
{{ Form::algText('algoCode',null,['autocomplete' => "off", 'required' => 'required']) }}
<button type="submit" class="button is-primary">Submit</button>

{{-- <fieldset>
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
				'default'  => 'Plains'
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
</fieldset> --}}

@section('footer')
	<script>
		$(document).ready(function(){
			formUtil.initDatalists();
		});
	</script>
@stop