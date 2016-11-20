@extends('layout')

@section('content')
	<h1>{{ $item }} Input</h1>
	<form method = 'POST' action = '/groups' class = 'inputForm'>
		{{ csrf_field() }}
		<fieldset>
			<label for='itemName'>Name:</label><input type='text' name = 'name' id = 'itemName' default = '{{ old('name') }}' />
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