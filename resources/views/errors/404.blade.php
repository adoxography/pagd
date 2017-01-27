@extends('layout', ['title' => 'Page not found'])

@section('content')
	<div class="heading">
		<h1 class="title">Page not found</h1>
	</div>
	<br />
	
	<div id="root">
		<div class="box">
			<p>
				Sorry, we couldn't find that page. If you typed the URL into your browser, please check your spelling. If you believe you got to this page in error, please <a href="/contact">contact us</a>.
			</p>
		</div>
	</div>
@endsection