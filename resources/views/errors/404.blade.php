@extends('layout', ['title' => 'Page not found'])

@section('title')
<p class="card-header-title">
	Page not found
</p>
@endsection

@section('content')
<div class="card-content">
	<p>
		Sorry, we couldn't find that page. If you typed the URL into your browser, please check your spelling. If you believe you got to this page in error, please <a href="/contact">contact us</a>.
	</p>
</div>
@endsection