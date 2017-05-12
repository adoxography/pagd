@extends('languages/show')

@section('content')
	@include('partials.show.forms', ['model' => $language])
@endsection