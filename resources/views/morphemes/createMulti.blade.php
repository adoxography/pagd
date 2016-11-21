@extends('layout')

@section('header')
	<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
	<script src = '/js/autosuggest_form.js'></script>
	<script src = '/js/datalist.js'></script>
@stop

@section('content')
	{{ Form::open(['method' => 'POST', 'url' => '/forms']) }}
		@foreach($formData as $key => $value)
			{{ Form::hidden("formData[$key]", $value) }}
		@endforeach

		<fieldset>
			<ul>
				@for($i = 0; $i < count($missing); $i++)
					<li>
						{{ Form::label("morpheme-$i", 'Morpheme') }}
						{{ Form::text("morphemes-$i", $missing[$i], ['name' => "morphemes[$i][name]"]) }}
						{{ Form::label("slot-$i", 'Slot') }}
						{{ Form::datalist("slot-$i", $slots, [], ['hidden' => ['name' => "morphemes[$i][slot_id]"]]) }}

						{{ Form::label("gloss-$i", 'Gloss') }}
						{{ Form::datalist("gloss-$i", $glosses, [], ['hidden' => ['name' => "morphemes[$i][gloss_id]"]] )}}
					</li>
				@endfor
			</ul>
		</fieldset>
		<fieldset>
			{{ Form::submit('Submit') }}
		</fieldset>
	{{ Form::close() }}

@stop

@section('footer')

<script>
	$(document).ready(function(){
		datalist('slot-0');
		datalist('gloss-0');
	});
</script>

@stop