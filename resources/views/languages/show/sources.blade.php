@extends('languages/show')

@section('content')
	@include('components.model.sourcelist', ['sources' => $sources])
@endsection