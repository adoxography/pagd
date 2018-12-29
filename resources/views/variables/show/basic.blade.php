@extends('variables.show')

@section('details')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Type</span>
				{{ $variable->type->name }}
			</div>
			<div class="field">
				<span class="label">Description</span>
				{{ $variable->description }}
			</div>
		</div>
		<div class="column">
			<div class="field">
				<span class="label">Options</span>
				<ul>
					@foreach($variable->values as $option)
						<li>{{ $option->name }}</li>
					@endforeach
				</ul>
			</div>
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $variable->sources])
	</div>
@endsection
