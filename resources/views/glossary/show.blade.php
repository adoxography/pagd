@extends('layout')

@section('content')
	<div class = 'itemList'>
		<h2>{{ ucFirst($itemName) }}</h2>
		<ul>
			@foreach($items as $item)
				<li><a href='/{{ $itemName }}/{{ $item->id }}'>{{ $item->name }}</a></li>
			@endforeach
		</ul>
		@if(Auth::user())
			<h3><a href='/{{ $itemName }}/create' class = 'newItem'>Add new</a></h3>
		@endif
	</div>
@stop