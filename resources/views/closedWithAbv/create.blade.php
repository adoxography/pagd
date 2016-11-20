@extends('layout')

@section('content')

	<h1>{{ $itemName }} Input</h1>

	<form method = 'POST' action = '{{ $action }}' class = 'inputForm'>
		{{ csrf_field() }}
		<fieldset>
			<label>Name</label>
			<input type = 'text' name = 'name'/>
			<label>Abbreviation</label>
			<input type = 'text' name = 'abv' />
		</fieldset>
		<fieldset class = 'formButtons'>
			<button type = 'reset' class = 'clearButton'>Clear</button>
			<button type = 'submit' class = 'submitButton'>Submit</button> 
		</fieldset>
	</form>
	@if(count($errors) > 0)
		<ul>
			@foreach($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	@endif
@stop