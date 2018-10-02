@extends('layout', ['title' => 'Add nominal form'])

@section('title')
	Add nominal form
@endsection

@section('content')
	@include('nominals.forms.partials.form', ['method' => 'POST', 'action' => '/nominals/forms'])
@endsection
