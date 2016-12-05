@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src="/js/formUtil.js"></script>
@stop

<fieldset>
	{{ Form::label('language') }}
	{{ Form::datalist(
		'language',
		$languages,
		[
			'visible' => (isset($presetForm) ? $presetForm->language->name : null),
			'hidden'  => (isset($presetForm) ? $presetForm->language_id    : null)
		],
		[
			'visible' => [
				'required' => 'required',
				'default'  => 'Proto-Algonquian'
			]
		]
	) }}
	{{ Form::label('form') }}
	{{ Form::text('form',(isset($presetForm) ? $presetForm->morphemicForm : null)) }}
	{{ Form::hidden('form_id',(isset($presetForm) ? $presetForm->id : null),['id' => 'form_id']) }}
{{-- 		{{ Form::label('parent','Parent') }}
	{{ Form::text('parent') }}
	{{ Form::hidden('parent_id',null,['id' => 'parent_id']) }} --}}

	{{ Form::label('name','Example') }}
	{{ Form::text('name') }}
	{{ Form::label('translation', 'Translation') }}
	{{ Form::text('translation') }}
</fieldset>
<fieldset>
	{{ Form::label('comments','Comments') }}
	{{ Form::textarea('comments', null, ['rows' => 3]) }}
</fieldset>
<fieldset>
	{{ Form::submit('Submit') }}
</fieldset>

@section('footer')
	<script>
		$(document).ready(function(){
			formUtil.initDatalists();
			formUtil.initAutocomplete('form','forms');
		});
	</script>
@stop