@extends('sources.show')

@section('details')
	<div class="field">
		<span class="label">Full citation</span>
		{!! replaceTags($source->long) !!}
	</div>
	@if($source->url)
		<div class="field">
			<span class="label">URL</span>
			<a href="{{ $source->url }}">{{ $source->url }}</a>
		</div>
	@endif
	@if($source->summary)
		<div class="field">
			<span class="label">Summary</span>
			{!! replaceTags($source->summary) !!}
		</div>
	@endif
	@if($source->notes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
		<div class="field">
			<span class="label">Notes</span>
			{!! replaceTags($source->notes) !!}
		</div>
	@endif
@endsection
