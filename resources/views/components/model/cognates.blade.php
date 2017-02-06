@if(!isset($depth))
	@component('components.model.field')
		@slot('label')
			Cognates of
			@if($list->id != $current->id)
				<a style="padding-left: .5rem;" href="/{{ $model }}/{{ $list->id }}">
			@endif
			{{ $list->name }} ({{ $list->language->name }})
			@if($list->id != $current->id)
				</a>
			@endif
		@endslot
		@foreach($list->allChildren as $child)
			@include('components.model.cognates', ['label' => 'Cognates', 'list' => $child, 'depth' => 1, 'current' => $current, 'model' => $model])
		@endforeach
	@endcomponent
@else
	<p style="margin-left: {{ $depth * 1.5 }}em;">
		@if($list->id != $current->id)
		<a href="/{{ $model }}/{{ $list->id }}">
			{{ $list->name }} ({{ $list->language->name }})
		</a>
		@else
			{{ $list->name }} ({{ $list->language->name }})
		@endif
	</p>

	@foreach($list->allChildren as $child)
		@include('components.model.cognates', ['label' => 'Cognates', 'list' => $child, 'depth' => $depth + 1, 'current' => $current, 'model' => $model])
	@endforeach
@endif