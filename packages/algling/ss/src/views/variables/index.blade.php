@extends('layout', ['title' => 'Variable Index'])

@section('title')
	List of variables @include('components.model.add-icon', ['uri' => "/variables/create"])
@endsection

@section('content')
	<alg-tabs>
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