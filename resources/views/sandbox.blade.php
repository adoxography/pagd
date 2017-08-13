@extends('layout')

@section('content')

	<form method="POST" action="/sandbox">
		{!! csrf_field() !!}
		<sandbox source="/autocomplete/morphemes" :allow-hyphens="false" :allow-new="true" name="morphemes"></sandbox>
		<button type="submit">Submit</button>
	</form>

@endsection