@extends('morph::morphemes.show')

@section('content')
	@include('partials.show.cognates', ['list' => $cognates, 'current' => $morpheme])
@endsection