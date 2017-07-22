@extends('ss::variables.show')

@section('content')
	<div class="field">
		<span class="label">{{ $variable->description }}</span>
		<alg-map :markers="{{ $languages }}"></alg-map>
	</div>

	<div class="field">
		{!! $variable->essay ? replaceTags($variable->essay) : 'Coming soon' !!}
	</div>
@endsection