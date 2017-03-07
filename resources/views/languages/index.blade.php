@extends('layout', ['title' => 'Language Index'])

@section('content')
	<div class="heading">
		<h1 class="title">Languages</h1>
		@if(Auth::user())
			<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		@endif
	</div>
	<br />

	@foreach($groups as $group)
	@if(count($group->languages) > 0)
	<h3 class="title is-3">{{ $group->name }}</h2>
	@include('components.index', ['items' => $group->languages, 'model' => 'languages'])
	@endif
	@endforeach
	@if(Auth::user())
	<br />
	<a href="/languages/order" class="button is-info is-medium">Modify the order</a>
	@endif
@stop