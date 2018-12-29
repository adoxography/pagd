@extends('phonemes.show')

@section('details')
	@include('partials.show.log', ['model' => $phoneme])
@endsection
