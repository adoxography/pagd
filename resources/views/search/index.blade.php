@extends('layout', ['title' => 'Search the database'])

@section('title')
	Search the database
@endsection

@section('content')
	<form method="GET" action="/search/general">
		<div class="field is-grouped">
			<p class="control">
				<span class="select">
					<select name="type">
						<option>Source</option>
						<option>Language</option>
						<option>Form</option>
						<option>Example</option>
						<option>Morpheme</option>
					</select>
				</span>
			</p>
			<p class="control is-expanded">
				<input class="input" type="text" name="lookup" />
			</p>
			<p class="control">
				<button class="button" type="submit">Search</button>
			</p>
		</div>
	</form>
@stop