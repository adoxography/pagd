@extends('layout', ['title' => 'Add nominal form'])

@section('title')
	Add nominal form
@endsection

@section('content')
	@include('nom::forms.partials.form', ['method' => 'POST', 'action' => '/nominals/forms'])
@endsection