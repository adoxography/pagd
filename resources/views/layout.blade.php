<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>{{ $title or "Pan-Algonquian Grammar Database" }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		
		@yield('header')
	</head>
	<body>
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						The Pan-Algonquian Grammar Database
					</h1>
					<h2 class="subtitle">
						Some subtitle here
					</h2>
				</div>
			</div>
		</section>
		<div id='menu'>
			@include('partials.menu')
		</div>

		<div id="root">
			@include('partials.flash')

			<section class="section">
				<div class="container">
					@yield('content')
				</div>
			</section>
		</div>

		@yield('table')

		@include('footer')	
		@yield('footer')

		<script src="{{ mix("/js/app.js") }}"></script>
	
		@if(App::environment('local'))
			<p>Browser sync enabled</p>
			<script id="__bs_script__">//<![CDATA[
				document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.7'><\/script>".replace("HOST", location.hostname));
			//]]></script>
		@endif
	</body>
</html>