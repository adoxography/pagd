@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Languages</h1>
		@if(Auth::user())
			<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
		@endif
	</div>
	<br />
	<ul class="box">
		@foreach($languages as $language)
			<li class="level">
				<div class="level-left">
					<div class="level-item">
						<a href='/languages/{{ $language->id }}'>{{ $language->name }}</a>
					</div>
				</div>
				@if(Auth::user())
					<div class="level-right">
						<div class="level-item">
							<a class="button" href="/languages/{{ $language->id }}/edit">
								<span class="icon" title="Edit">
									<i class="fa fa-pencil"></i>
								</span>
							</a>
						</div>
						
						<div class="level-item">
						{{ Form::open(['method' => 'DELETE', 'url' => "/languages/{$language->id}"]) }}
							<a class="button" onclick="event.preventDefault(); this.parentNode.submit()">
								<span class="icon" title="Delete">
									<i class="fa fa-times"></i>
								</span>
							</a>
							{{ Form::close() }}
						</div>
						
					</div>
				@endif
			</li>
		@endforeach
	</ul>
@stop