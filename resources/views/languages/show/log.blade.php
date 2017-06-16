@extends('languages.show')

@section('content')
	@include('partials.show.log', ['model' => $language])
@endsection