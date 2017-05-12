@if(!isset($depth))
	@if(count($list->children) > 0)
		<p>
			Reflexes of {!! $list->id == $current->id ? "<strong>{$list->uniqueName}</strong>" : $list->renderHTML() !!} ({!! $list->language->renderHTML() !!})
		</p>

		@foreach($list->allChildren as $child)
			@include('partials.show.cognates', ['label' => 'Cognates', 'list' => $child, 'depth' => 1, 'current' => $current])
		@endforeach
	@else
		No cognates currently available
	@endif
@else
	<p style="margin-left: {{ $depth * 1.5 }}em;">
		{{ $list->changeType && $list->changeType->name == "Morphological" ? '→' : '>' }}

		@if($list->id == $current->id)
			<strong>{!! $list->uniqueName() !!}</strong>
		@else
			{!! $list->renderHTML() !!}
		@endif
		({!! $list->language->renderHTMl() !!})
	</p>

	@foreach($list->allChildren as $child)
		@include('partials.show.cognates', ['label' => 'Cognates', 'list' => $child, 'depth' => $depth + 1, 'current' => $current])
	@endforeach
@endif