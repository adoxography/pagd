@extends('verb::forms.show')

@section('content')
	@include('partials.show.log', ['model' => $form])
@endsection