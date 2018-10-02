@extends('languages.show')

@section('content')
	@include('nominals.partials.show.nominals', ['model' => $language])
@endsection
