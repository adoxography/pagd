@if(count($sources) > 0)
	<ul class="display-source-list">
		@foreach($sources as $source)
			<li title="{{ preg_replace('`<[^>]+>`', '', $source->long) }}">
				<a href="/sources/{{ $source->id }}">{{ $source->display }}</a>{{ $source->pivot->extraInfo ? ": {$source->pivot->extraInfo}" : "" }}
			</li>
		@endforeach
	</ul>
@else
	None
@endif
