@extends('ss::variables.show')

@section('content')
	<!--suppress SyntaxError -->
	<div class="field">
		<span class="label">{{ $variable->description }}</span>
		<alg-map :markers="{{ $languages }}"></alg-map>
        @foreach($colorAssignments as $value => $color)
            <span style="color: #{{ $color }}; @if(!$loop->first) margin-left: .5rem; @endif">&#9679</span> {{ $value }}
        @endforeach
	</div>

    @isset ($variable->essay)
    	<div class="field">
    		{!! replaceTags($variable->essay) !!}
    	</div>
    @endisset
@endsection
