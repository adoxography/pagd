<!doctype html>
<html style="background-color: white;">
	<head>
		<meta charset="UTF-8" />
		<title>{{ $title or "Database of Algonquian Language Structures" }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>
		
		@yield('styles')

		@if(App::environment() == 'local')
			<style>
				.hero-body #logo {
					background-color: #00ff00;
				}
			</style>
		@endif
	</head>
	<body>
		@include('layout.header')

		<section class="section" id="main-content">
			<div class="container" id="root">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							@yield('title')
						</p>
						@yield('icons')
					</header>

					@include('partials.flash')

					<div class="columns is-gapless">
						<div class="column is-narrow">
							<nav class="panel">
								@yield('panel')
							</nav>
						</div>
						<div class="column">
							<div class="card-content">
								@yield('content')
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		@include('layout.footer')

		<script src="{{ mix("/js/app.js") }}"></script>
	</body>
</html>