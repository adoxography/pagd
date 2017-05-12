@extends('sources.show')

@section('content')
	@include('partials.show.morphemes', ['model' => $source, 'showAddButtons' => false])
@endsection