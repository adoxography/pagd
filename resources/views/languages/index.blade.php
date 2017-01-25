@extends('layout', ['title' => 'Language Index'])

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Languages</h1>
			@if(Auth::user())
				<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
			@endif
		</div>
		<br />

		@component('components.index', ['items' => $languages, 'model' => 'languages']) @endcomponent
	</div>
@stop