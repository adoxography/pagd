@extends('verbs.forms.show')

@section('details')
	@include('partials.show.cognates', ['list' => $cognates, 'current' => $form, 'uri' => 'verbs'])
@endsection
