@extends('word::examples.show')

@section('content')
	@include('partials.show.log', ['model' => $example])
@endsection