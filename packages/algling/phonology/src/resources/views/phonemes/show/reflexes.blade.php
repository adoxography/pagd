@extends('phon::phonemes.show')

@section('content')
	@if($phoneme->parents->count() > 0)
		<div class="field">
			<span class="label">
				Parents of {!! $phoneme->present() !!}
				@can('add content')
					(<a href="/phonemes/{{ $phoneme->id }}/addChild">Add another</a>)
				@endcan
			</span>
			{!! $phoneme->present()->parentReflexes !!}
		</div>
	@endif

	@if($phoneme->reflexes->count() > 0)
		<div class="field">
			<span class="label">
				Daughters of {!! $phoneme->present() !!}
				@can('add content')
					(<a href="/phonemes/{{ $phoneme->id }}/addParent">Add another</a>)
				@endcan
			</span>
			{!! $phoneme->present()->childReflexes !!}
		</div>
	@endif
@endsection