@extends('layout', ['title' => 'Available languages'])

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Languages</h1>
			@if(Auth::user())
				<h3 class="subtitle"><a href="/languages/create">Add another</a></h3>
			@endif
		</div>
		<br />
		<model-index>
			@foreach($languages as $language)
				<model-index-line name="{{ $language->name }}" model="languages" id="{{ $language->id }}">
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
								@component('components.form', ['method' => 'DELETE', 'url' => "/languages/{$language->id}"])
									<a class="button" onclick="event.preventDefault(); this.parentNode.submit()">
										<span class="icon" title="Delete">
											<i class="fa fa-times"></i>
										</span>
									</a>
								@endcomponent
							</div>
							
						</div>
					@endif
				</model-index-line>
			@endforeach
		</model-index>
	</div>
@stop