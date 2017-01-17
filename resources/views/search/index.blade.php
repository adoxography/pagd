@extends('layout')

@section('header')
	<script src = '/js/formUtil.js'></script>
@stop

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Paradigm Search</h1>
		</div>
		<br />

		<form class="box" method="GET" action="/search/paradigm">
			<div class="columns">
				<div class="column box">
					<h5 class="title is-5">Languages</h5>
					<p class="control">
						<span class="select">
							<select name="languages[]">
								@foreach($languages as $language)
									<option value="{{ $language->id }}">{{ $language->name }}</option>
								@endforeach
							</select>
						</span>
					</p>
					<alg-message>
						<template slot="header">Note</template>
						I'm going to work on a component that will let you select multiple languages
					</alg-message>
				</div>
				<div class="column box">
					<h5 class="title is-5">Classes</h5>
					@foreach($classes as $class)
						<p class="control">
							<label class="checkbox">
								<input type="checkbox" name="classes[]" id="{{ $class->name }}" value="{{ $class->id }}" />
								{{ $class->name }}
							</label>
						</p>
					@endforeach
					<alg-message>
						<template slot="header">Note</template>
						Not selecting anything runs a search for all classes, which is what I want for being able to check on the whole database quickly. In the future, I'll restrict it so that the form cannot be submitted without one of these checked.
					</alg-message>
				</div>				
				<div class="column box">
					<h5 class="title is-5">Inflection Types</h5>
					@foreach($orders as $order)
						<p class="control">
							<label class="checkbox">
								<input type="checkbox" name="orders[]" id="{{ $order->name }}" value="{{ $order->id }}" />
								{{ $order->name }} Order
							</label>
						</p>
					@endforeach
					<p class="control">
						<label class="checkbox">
							<input type="checkbox" name="includeNegative" id="includeNegative" value="true" />
							Include negative forms
						</label>
					</p>					
					<p class="control">
						<label class="checkbox">
							<input type="checkbox" name="includeDiminutive" id="includeDiminutive" value="true" />
							Include diminutive forms
						</label>
					</p>
					<alg-message>
						<template slot="header">Note</template>
						There are a lot more modes than there are of anything else, so the form feels unbalanced. Either the modes need to be an expandable list, or the classes and inflection types should be merged into a single column.
					</alg-message>
				</div>			
				<div class="column box">
					<h5 class="title is-5">Modes</h5>
					<p class="control">
						<label class="radio">
							<input type="radio" name="modeSelect" id="indicative-only" value="indicativeOnly" selected="selected" />
							Indicative only
						</label>
					</p>					
					<p class="control">
						<label class="radio">
							<input type="radio" name="modeSelect" id="all-modes" value="allModes" />
							All available modes
						</label>
					</p>					
					<p class="control">
						<label class="radio">
							<input type="radio" name="modeSelect" id="mode-select" value="modeSelect" />
							The following modes...
						</label>
					</p>
					<div class="box">
						@foreach($modes as $mode)
							<p class="control">
								<label class="checkbox">
									<input type="checkbox" name="modes[]" id="{{ $mode->name }}" value="{{ $mode->id }}">
									{{ $mode->name }}
								</label>
							</p>
						@endforeach
					</div>
				</div>
			</div>
			<button type="submit" class="button is-success">Search</button>
		</form>

		<div class="heading">
			<h1 class="title">Form Search</h1>
		</div>
		<br />

		<form-search-form classes="{{ $classes }}" arguments="{{ $arguments }}" orders="{{ $orders }}" modes="{{ $modes }}"></form-search-form>
	</div>


{{-- 	{{ Form::open(['method' => 'GET', 'url' => '/search/paradigm']) }}
		<h1>Paradigm Search</h1>
		<h4>Enter the parameters for the paradigm you would like to see:</h4>

		<fieldset>
			<legend>Languages</legend>
			<i>(Press CTRL+click to select multiple entries)</i>
			{{ Form::select('languages[]', organizeForDropdown($languages), null, ['multiple' => true]) }}
			{{ Form::text('languages[]') }}
		</fieldset>
		<fieldset>
			<legend>Classes</legend>
			@foreach($classes as $class)
				{{ Form::checkbox('classes[]', $class->id, null, ['id' => $class->name]) }}
				{{ Form::label($class->name) }}
			@endforeach
		</fieldset>
		<fieldset>
			<legend>Inflection Types</legend>
			@foreach($orders as $order)
				{{ Form::checkbox('orders[]', $order->id, null, ['id' => $order->name]) }}
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
					{{ Form::checkbox('modes[]', $mode->id, null, ['id' => $mode->name]) }}
					{{ Form::label($mode->name) }}
				@endforeach
			</fieldset>
		</fieldset>
		{{ Form::submit('Search') }}
	{{ Form::close() }} --}}

{{-- 	{{ Form::open(['method' => 'GET', 'url' => '/search/form']) }}
		<h1>Form Search</h1>
		<h4>Enter the parameters for a particular form:</h4>
		<fieldset>
			{{ Form::label('class') }}
			{{ Form::select('class', organizeForDropdown($classes)) }}
		</fieldset>
		<fieldset>
			<legend>Arguments</legend>
			{{ Form::select('subject', organizeForDropdown($arguments)) }}
			{{ Form::select('primaryObject', organizeForDropdown($arguments)) }}
			{{ Form::select('secondaryObject', organizeForDropdown($arguments)) }}
		</fieldset>
		<fieldset>
			{{ Form::label('order') }}
			{{ Form::select('order', organizeForDropdown($orders)) }}
		</fieldset>
		<fieldset>
			{{ Form::label('mode') }}
			{{ Form::select('mode', organizeForDropdown($modes)) }}
		</fieldset>
		<fieldset>
			<legend>Extras</legend>
			{{ Form::checkbox('isNegative', 'negative') }}
			{{ Form::label('isNegative', 'Negative') }}			
			{{ Form::checkbox('isDiminutive', 'diminutive') }}
			{{ Form::label('isDiminutive', 'Diminutive') }}			
			{{ Form::checkbox('isAbsolute', 'absolute') }}
			{{ Form::label('isAbsolute', 'Absolute') }}			
			{{ Form::checkbox('isObjective', 'objective') }}
			{{ Form::label('isObjective', 'Objective') }}
		</fieldset>
		<fieldset>
			<legend>Language</legend>
			{{ Form::radio('all-languages', 'allLanguages') }}
			{{ Form::label('all-languages', 'All languages') }}
			{{ Form::radio('all-languages', 'someLanguages') }}
			{{ Form::label('all-languages', 'The following languages...') }}
			<fieldset>
				{{ Form::text('language') }}
			</fieldset>
		</fieldset>
		{{ Form::submit('Search') }}
	{{ Form::close() }} --}}

@stop

@section('footer')

<script>
	$(document).ready(function(){
		formUtil.initDatalists();
	});
</script>

@stop