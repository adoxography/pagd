@extends('words.examples.show')

@section('content')
	@include('partials.show.log', ['model' => $example])
@endsection
