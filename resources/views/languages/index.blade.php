@extends('layout', ['title' => 'Language Index'])

@section('title')
	Languages
@endsection

@section('content')
	@if(Auth::user() && Auth::user()->permissions->canEdit)
		<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		<br />
	@endif

	@foreach($groups as $group)
		@if(count($group->languages) > 0)
			<h4 class="title is-4">{{ $group->name }}</h4>
			@include('components.index', ['items' => $group->languages, 'model' => 'languages'])
		@endif
	@endforeach
	@if(Auth::user() && Auth::user()->permissions->canEdit)
		<br />
		<a href="/languages/order" class="button is-primary is-medium">Modify the order</a>
	@endif
@stop