@extends('sources.show')

@section('details')
	@include('partials.show.morphemes', ['model' => $source, 'showAddButtons' => false])
@endsection
