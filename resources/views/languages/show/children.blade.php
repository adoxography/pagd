@extends('languages/show')

@section('content')
	@if(Auth::user() && Auth::user()->permissions->canEdit)
		<a href="/languages/{{ $language->id }}/addChild">Add another</a>
	@endif

	@if(count($language->children) > 0)
		<ul>
		@foreach($language->children as $child)
			<li>{{ $child->name }}</li>
		@endforeach
	</ul>
	@else
		None
	@endif
@endsection