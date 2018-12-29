@extends('languages.show')

@section('details')
	@include('partials.show.nominals', ['model' => $language])
@endsection
