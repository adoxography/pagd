@extends('layout')

@section('content')

	<div class = 'itemList'>
		<h2>{{ $model }}</h2>
		<ul>
			@foreach($members as $member)
				<li><a href = '/{{ strtolower($model) }}/{{ $member->id }}'>{{ $member->name }}</a></li>
			@endforeach
		</ul>
		<h3><a href = '/{{ strtolower($model) }}/create' class = 'newItem'>Add new</a></h3>
	</div>

@stop