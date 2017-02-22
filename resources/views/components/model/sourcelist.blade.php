@if(count($sources) > 0)
	<ul class="display-source-list">
		@foreach($sources as $source)
			<li title="{{ $source->long }}">{{ $source->short }}{{ $source->pivot->extraInfo ? ": {$source->pivot->extraInfo}" : "" }}</li>
		@endforeach
	</ul>
@else
	None
@endif