@extends('word::examples.show')

@section('content')
	@include('partials.show.cognates', ['list' => $example->cognates, 'current' => $example, 'uri' => 'examples'])
@endsection