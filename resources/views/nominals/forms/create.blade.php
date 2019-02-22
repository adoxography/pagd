@extends('layout', ['title' => 'Add nominal form'])

@section('title')
    <h1 class="title is-4">Add nominal form</h1>
@endsection

@section('content')
	@include('nominals.forms.partials.form', ['method' => 'POST', 'action' => '/nominals/forms'])
@endsection
