@extends('phon::phonemes.show')

@section('content')
	@if($phoneme->parents->count() > 0)
		<div class="field">
			<span class="label">
				Parents of {!! $phoneme->present() !!}
				@if(Auth::user() && Auth::user()->permissions->canEdit)
					(<a href="/phonemes/{{ $phoneme->id }}/addChild">Add another</a>)
				@endif
			</span>
			{!! $phoneme->present()->parentReflexes !!}
		</div>
	@endif

	@if($phoneme->reflexes->count() > 0)
		<div class="field">
			<span class="label">
				Daughters of {!! $phoneme->present() !!}
				@if(Auth::user() && Auth::user()->permissions->canEdit)
					(<a href="/phonemes/{{ $phoneme->id }}/addParent">Add another</a>)
				@endif
			</span>
			{!! $phoneme->present()->childReflexes !!}
		</div>
	@endif
@endsection