@extends('words.examples.show')

@section('details')
	@include('partials.show.cognates', ['list' => $example->cognates, 'current' => $example, 'uri' => 'examples'])
@endsection
