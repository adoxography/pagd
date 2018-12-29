@extends('languages/show')

@section('details')
	<label class="label">
		Rules
		@component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addRule"]) @endcomponent
	</label>

	@if(count($language->rules) > 0)
		<ul>
			@foreach($language->rules as $rule)
				<li>{!! $rule->present('link') !!}</li>
			@endforeach
		</ul>
	@else
		None
	@endif
@endsection
