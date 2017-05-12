@extends('sources.show')

@section('content')
	@include('partials.show.forms', ['model' => $source, 'showAddButtons' => false])
@endsection