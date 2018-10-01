@extends('layout')

@section('content')
	<h1>Forms</h1>
	<ul>
		@foreach($forms as $form)
			<li>{{ $form->surfaceForm }}</li>
		@endforeach
	</ul>
@stop