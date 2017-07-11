@if(isset($localInventory))
	<ul>
		@foreach ($localInventory->archiphonemes as $archiphoneme)
			@php
				$reflexes = $language->phonemes->filter(function($value) use ($archiphoneme) {
					return $value->paParents->contains('id', $archiphoneme->id);
				});
			@endphp

			@if($reflexes->count() > 0)
				@foreach($reflexes as $reflex)
					<li>{!! $archiphoneme->present('link') !!} > {!! $reflex->present('link') !!}
				@endforeach
			@else
				<li>{!! $archiphoneme->present('link') !!} > ?
			@endif
		@endforeach
	</ul>
@else
	<ul>
		@foreach($inventory->archiphonemes as $archiphoneme)
			<li>{!! $archiphoneme->present('link') !!}: {{ $archiphoneme->archiphonemeDescription }}</li>
		@endforeach
	</ul>
@endif