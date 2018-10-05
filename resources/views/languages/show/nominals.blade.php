@extends('languages.show')

@section('content')
	@include('partials.show.nominals', ['model' => $language])
@endsection
