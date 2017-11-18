@extends('phon::phonemes.show')

@section('content')
	@foreach ($languages as $language)
		<span>
            <span style="color: #{{ $language->color }}; @if(!$loop->first) margin-left: .5rem; @endif">&#9679</span>&nbsp{!! $language->present('link') !!}
        </span>
	@endforeach
	<alg-reflex-network :graph-data="{{ $graphData }}"></alg-reflex-network>
@endsection
