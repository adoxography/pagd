@extends('layout', ['title' => 'Language Index'])

@section('content')
	<div class="heading">
		<h1 class="title">Languages</h1>
		@if(Auth::user())
			<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		@endif
	</div>
	<br />

	@include('components.index', ['items' => $languages, 'model' => 'languages'])
@stop