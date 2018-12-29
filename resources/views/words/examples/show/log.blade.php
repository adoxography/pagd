@extends('words.examples.show')

@section('details')
	@include('partials.show.log', ['model' => $example])
@endsection
