@extends('ss::variables.show')

@section('content')
	{!! $variable->essay ? replaceTags($variable->essay) : 'Coming soon' !!}
@endsection