@extends('languages.show')

@section('content')
	@include('nom::partials.show.nominals', ['model' => $language])
@endsection