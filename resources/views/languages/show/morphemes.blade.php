@extends('languages/show')

@section('content')
	@include('partials.show.morphemes', ['model' => $language])
@endsection