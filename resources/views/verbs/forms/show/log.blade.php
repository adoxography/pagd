@extends('verbs.forms.show')

@section('details')
	@include('partials.show.log', ['model' => $form])
@endsection
