@extends('languages/show')

@section('details')
	@include('components.model.sourcelist', ['sources' => $sources])
@endsection
