@extends('layout', ['title' => 'User directory'])

@section('title')
	User directory
@endsection

@section('content')
	<ul>
		@foreach($users as $user)
			<li>{!! $user->present('link') !!}</li>
		@endforeach
	</ul>
@endsection
