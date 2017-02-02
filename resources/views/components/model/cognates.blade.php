<?php
	if(!isset($depth)) {
		$depth = 0;
	}
?>

<p style="margin-left: {{ $depth * 1.5 }}em;">
	@if($list->id != $current->id)
	<a href="/{{ $model }}/{{ $list->id }}">
		{{ $list->uniqueNameWithLanguage() }}
	</a>
	@else
		{{ $list->uniqueNameWithLanguage() }}
	@endif
</p>

@foreach($list->allChildren as $child)
	@include('components.model.cognates', ['label' => 'Cognates', 'list' => $child, 'depth' => $depth + 1, 'current' => $current, 'model' => $model])
@endforeach