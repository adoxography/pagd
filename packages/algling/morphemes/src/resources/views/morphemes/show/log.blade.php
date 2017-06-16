@extends('morph::morphemes.show')

@section('content')
	@include('partials.show.log', ['model' => $morpheme])
@endsection