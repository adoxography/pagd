@extends('languages.show')

@section('details')
	@include('partials.show.log', ['model' => $language])
@endsection
