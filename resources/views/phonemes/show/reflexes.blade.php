@extends('phonemes.show')

@section('styles')
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.css" />
@endsection

@section('content')
	@foreach ($languages as $language)
		<span>
            <span style="color: #{{ $language->color }}; @if(!$loop->first) margin-left: .5rem; @endif">&#9679</span>&nbsp{!! $language->present('link') !!}
        </span>
	@endforeach
	{{-- <alg-reflex-network :graph-data="{{ $graphData }}"></alg-reflex-network> --}}
    <alg-network :nodes="{{ json_encode($graphData['nodes']) }}" :edges="{{ json_encode($graphData['links']) }}"></alg-network>
@endsection
