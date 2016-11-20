@extends('layout')

@section('content')
	<div class = 'show'> <!-- Make sure to change this to index class at some point -->
		<h1>Languages 
		@if(Auth::user())
			(<a href='/languages/create' class = 'newItem'>Add new</a>)
		@endif
		</h1>
		<div class = 'itemList'>
			<ul>
				@foreach($languages as $language)
					<li><a href='/languages/{{ $language->id }}'>{{ $language->name }}</a></li>
				@endforeach
			</ul>
		</div>
	</div>
@stop