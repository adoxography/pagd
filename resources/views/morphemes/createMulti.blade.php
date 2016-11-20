<?php

use App\Gloss;
use App\Slot;

$glosses = getOptions(Gloss::all(), 'abv');
$slots = getOptions(Slot::all(), 'abv');
?>

@extends('layout')

@section('content')
	{{ Form::open(['method' => 'POST', 'url' => '/forms']) }}
		@foreach($formData as $key => $value)
			{{ Form::hidden("formData[$key]", $value) }}
		@endforeach

		<fieldset>
			<ul>
				@for($i = 0; $i < count($missing); $i++)
					<li>
						{{ Form::label("morphemes[$i][name]", 'Morpheme') }}
						{{ Form::text("morphemes[$i][name]", $missing[$i]) }}
						{{ Form::label("morphemes[$i][slot_id]", 'Slot') }}
						{{ Form::select("morphemes[$i][slot_id]", $slots) }}						
						{{ Form::label("morphemes[$i][gloss_id]", 'Gloss') }}
						{{ Form::select("morphemes[$i][gloss_id]", $glosses) }}
					</li>
				@endfor
			</ul>
		</fieldset>
		<fieldset>
			{{ Form::submit('Submit') }}
		</fieldset>
	{{ Form::close() }}

@stop