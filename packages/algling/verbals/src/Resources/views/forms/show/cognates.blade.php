@extends('verb::forms.show')

@section('content')
	@include('partials.show.cognates', ['list' => $cognates, 'current' => $form, 'uri' => 'verbs'])
@endsection