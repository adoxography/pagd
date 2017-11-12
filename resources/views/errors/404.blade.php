@extends('layout', ['title' => 'Page not found'])

@section('title')
	Page not found
@endsection

@section('content')
	<p>
		Sorry, we couldn't find that page. If you typed the URL into your browser, please check your spelling. @can('add content') If you believe you got to this page in error, please <a href="/tickets/create">open a ticket</a>. @endcan
	</p>
@endsection
