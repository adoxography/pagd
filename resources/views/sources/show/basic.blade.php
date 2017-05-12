@extends('sources.show')

@section('content')
	<div class="field">
		<span class="label">Full citation</span>
		{!! replaceTags($source->long) !!}
	</div>
	@if($source->url)
		<div class="field">
			<span class="label">URL</span>
			{{ $source->url }}
		</div>
	@endif
	@if($source->summary)
		<div class="field">
			<span class="label">Summary</span>
			{!! replaceTags($source->summary) !!}
		</div>
	@endif
	@if($source->notes && Auth::user() && Auth::user()->permissions->canEdit)
		<div class="field">
			<span class="label">Notes</span>
			{!! replaceTags($source->notes) !!}
		</div>
	@endif
@endsection