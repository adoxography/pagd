@extends('layout')

@section('content')

	{{ Form::open(['method' => 'GET', 'url' => '/search/paradigm']) }}
		<h1>Paradigm Search</h1>
		<h4>Enter the parameters for the paradigm you would like to see:</h4>

		<fieldset>
			<legend>Languages</legend>
			{{ Form::text('language[]') }}
			{{ Form::text('language[]') }}
		</fieldset>
		<fieldset>
			<legend>Classes</legend>
			@foreach($classes as $class)
				{{ Form::checkbox($class->name, $class->name) }}
				{{ Form::label($class->name) }}
			@endforeach
		</fieldset>
		<fieldset>
			<legend>Inflection Types</legend>
			@foreach($orders as $order)
				{{ Form::checkbox($order->name, $order->name) }}
				{{ Form::label($order->name, ucfirst($order->name).' Order') }}
			@endforeach
			{{ Form::checkbox('includeNegative', 'negative') }}
			{{ Form::label('includeNegative', 'Include negative forms') }}			
			{{ Form::checkbox('includeDiminutive', 'diminutive') }}
			{{ Form::label('includeDiminutive', 'Include diminutive forms') }}
		</fieldset>
		<fieldset>
			<legend>Modes</legend>
			{{ Form::radio('indicative-only', 'indicativeOnly', true, ['name' => 'modeSelect']) }}
			{{ Form::label('indicative-only', 'Indicative Only') }}
			{{ Form::radio('all-modes', 'allModes', null, ['name' => 'modeSelect']) }}
			{{ Form::label('all-modes', 'All available modes') }}
			{{ Form::radio('mode-select', 'selectModes', null, ['name' => 'modeSelect']) }}
			{{ Form::label('mode-select', 'The following modes:') }}
			<fieldset id = 'mode-list'>
				@foreach($modes as $mode)
					{{ Form::checkbox($mode->name, $mode->name) }}
					{{ Form::label($mode->name) }}
				@endforeach
			</fieldset>
		</fieldset>
		{{ Form::submit('Search') }}
	{{ Form::close() }}

	{{ Form::open(['method' => 'GET', 'url' => '/search/form']) }}
		<h1>Form Search</h1>
		<h4>Enter the parameters for a particular form:</h4>
		<fieldset>
			{{ Form::label('class') }}
			{{ Form::select()}}
		</fieldset>
	{{ Form::close() }}

@stop