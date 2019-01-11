@if(count($sources) > 0)
	<ul class="display-source-list">
		@foreach($sources as $source)
			<li title="{{ preg_replace('`<[^>]+>`', '', $source->long) }}">
				<a href="/sources/{{ $source->id }}">{{ $source->display }}</a>
                {{ $source->pivot->extra_info ? ": {$source->pivot->extra_info}" : "" }}
                @isset($source->pivot->description)
                {{ $source->pivot->description }}
                @endisset
			</li>
		@endforeach
	</ul>
@else
	None
@endif
