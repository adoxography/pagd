@extends('morphemes.show')

@section('details')
	@include('partials.show.cognates', ['list' => $cognates, 'current' => $morpheme, 'uri' => 'morphemes'])
@endsection
