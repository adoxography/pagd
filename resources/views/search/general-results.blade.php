@extends('layout', ['title' => 'Search results'])

@section('content')
	<div class="heading">
		<h1 class="title">Search Results</h1>
	</div>
	<br />

	<div class="box">
		@if(count($results) > 0)
			<ul>
				@foreach($results as $result)
					<li><a href="/{{ $table }}/{{ $result['id'] }}">{{ $result['display'] }}</a></li>
				@endforeach
			</ul>
		@else
			No results found
		@endif
	</div>
@endsection