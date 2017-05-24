@extends('languages/show')

@section('content')
	@include('partials.show.verbs', ['model' => $language])
@endsection