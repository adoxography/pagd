@extends('morph::morphemes.show')

@section('content')
	@include('partials.show.forms', ['model' => $morpheme, 'showAddButtons' => false])
@endsection