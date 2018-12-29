@extends('nominals.forms.show')

@section('details')
	@include('partials.show.cognates', ['list' => $form->cognates, 'current' => $form, 'uri' => 'nominals'])
@endsection
