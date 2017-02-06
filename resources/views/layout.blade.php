<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>{{ $title or "Pan-Algonquian Grammar Database" }}</title>
		
		{{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"> --}}

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

		@include('partials.flash')

		<section class="section">
			<div class="container" id="root">
				@yield('content')
			</div>
		<section class="section">

		@yield('table')

		@include('footer')	
		@yield('footer')

		<script src="{{ mix("/js/app.js") }}"></script>
	
	</body>
</html>