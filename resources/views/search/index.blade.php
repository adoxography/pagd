@extends('layout')

@section('content')

	<form method = 'POST' action = '/search' class = 'searchBox'>
		<fieldset>
			<p>Search for:</p>
			<select name = 'searchType'>
				<option value = 'lang'>Language</option>
				<option value = 'form'>Form</option>
				<option value = 'morph'>Morpheme</option>
			</select>
			<input type = 'text' name = 'lookup' />
		</fieldset>
		<fieldset>
			<p>Limit by:</p>
			<label id = 'orderSelect'>Order</label><select name = 'order' id = 'orderSelect'>
				<option value = 'NULL'>Do not limit</option>
				{{ printOptions($orders) }}
			</select>
			<label id = 'moodSelect'>Mood</label><select name = 'mood' id = 'moodSelect'>
				<option value = 'NULL'>Do not limit</option>
				{{ printOptions($moods) }}
			</select>
			<label id = 'tenseSelect'>Tense</label><select name = 'tense' id = 'tenseSelect'>
				<option value = 'NULL'>Do not limit</option>
				{{ printOptions($tenses) }}
			</select>
			<label id = 'classSelect'>Class</label><select name = 'class' id = 'classSelect'>
				<option value = 'NULL'>Do not limit</option>
				{{ printOptions($classes) }}
			</select>
		</fieldset>
		<fieldset>
			<button type = 'submit'>Search</button>
		</fieldset>
		{{ csrf_field() }}
	</form>

@stop