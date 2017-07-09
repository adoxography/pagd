@extends('nom::forms.show')

@section('content')
	@include('partials.show.cognates', ['list' => $form->cognates, 'current' => $form, 'uri' => 'nominals'])
@endsection