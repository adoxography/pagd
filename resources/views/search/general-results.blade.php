@extends('layout', ['title' => 'Search results'])

@section('title')
	Search results
@endsection

@section('content')
	@if(count($results) > 0)
		<ul>
			@foreach($results as $result)
				<li><a href="/{{ $table }}/{{ $result['id'] }}">{{ $result['display'] }}</a></li>
			@endforeach
		</ul>
	@else
		No results found
	@endif
@endsection
