@extends('morphemes.show')

@section('content')
	@include('partials.show.cognates', ['list' => $cognates, 'current' => $morpheme, 'uri' => 'morphemes'])
@endsection