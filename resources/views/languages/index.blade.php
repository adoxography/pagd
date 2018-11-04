@extends('layout', ['title' => 'Language Index'])

@section('title')
	Languages
@endsection

@section('content')
	@can('add content')
		<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		<br />
	@endcan

	@foreach($groups as $group)
		@if(count($group->languages) > 0)
			<h4 class="title is-4">{!! $group->present('link') !!}</h4>
			@include('components.index', ['items' => $group->languages, 'model' => 'languages'])
		@endif
	@endforeach
	@can('add content')
		<br />
		<a href="/languages/order" class="button is-primary is-medium">Modify the order</a>
	@endcan
@stop
