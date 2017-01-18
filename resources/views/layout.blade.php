<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Pan-Algonquian Grammar Database</title>
		
		{{-- <link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/> --}}
		<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.css"/>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.js"></script>
		<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		{{-- <script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script> --}}
		{{-- {{ Html::style(elixir('css/style.css')) }} --}}
		
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
			<div class="container">
				@yield('content')
			</div>
		<section class="section">

		@include('footer')
		
		@yield('footer')

		<script src="/js/vue-components.js"></script>
		<script>
			$(document).ready(function(){
				const button = $(".dropdown-switch");
				const dropdown = $(".dropdown-options");

				button.click(function() {
					dropdown.toggleClass('is-open');
				});
			});
		</script>
	
	</body>
</html>