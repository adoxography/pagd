@extends('layout')

@section('content')

	<div class = 'itemList'>
		<h2>{{ $group->name }}</h2>
		<ul>
			@foreach($group->languages as $language)
				<li><a href = "/languages/{{ $language->id }}">{{ $language->name }}</a></li>
			@endforeach
		</ul>
		<h3><a href='/groups/addTo/{{ $group->id }}'>Add new language</a></h3>
	</div>
	<form method='POST' action ='/groups/{{ $group->id }}' class = 'deleteButton'>
		{{ method_field('DELETE') }}
		{{ csrf_field() }}
		<button type='submit'>Delete</button>
	</form>

@stop