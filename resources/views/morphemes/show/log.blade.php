@extends('morphemes.show')

@section('details')
	@include('partials.show.log', ['model' => $morpheme])
@endsection
