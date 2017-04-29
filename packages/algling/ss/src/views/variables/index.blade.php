@extends('layout', ['title' => 'Variable Index'])

@section('content')
	<div class="heading">
		<h1 class="title">List of Variables</h1>
		@if(Auth::user() && Auth::user()->permissions->canEdit)
			<h3 class="subtitle"><a href="/variables/create">Add another</a></h3>
		@endif
	</div>
	<br />

	<alg-tabs class="box content">
		@foreach($types as $type)
			<alg-tab name="{{ $type->name }}" {{ $loop->first ? 'selected="selected"' : '' }}>
				<ul>
					@foreach($type->variables as $variable)
					<li>
						<a href="/variables/{{ $variable->id }}">{{ $variable->name }}</a>
					</li>
					@endforeach
				</ul>
			</alg-tab>
		@endforeach
	</alg-tabs>
@endsection