@extends('layout')

@section('content')

	<div id="root">
		<div class="heading">
			<h1 class="title">Confirm Delete</h1>
		</div>
		<br />

		<div class="box">
			<p>{{ $morpheme->name }} is still associated with the following forms:</p>
			<ul>
				@foreach($forms as $form)
					<li><a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a></li>
				@endforeach
			</ul>
			<p>Are you sure you want to delete {{ $morpheme->name }}?</p>
			{{ Form::open(['method' => 'DELETE', 'url' => "/morphemes/".$morpheme->id])}}
				{{ Form::hidden('confirmDelete', true) }}
				{{ Form::submit('Yes') }}
			{{ Form::close() }}
		</div>
	</div>

@stop