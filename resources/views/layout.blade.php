<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Pan-Algonquian Grammar Database</title>
		
		<link rel='stylesheet' href="{{ elixir('css/style.css') }}">
		
		@yield('header')
	</head>
	<body>
		@include('partials.menu')
	
		@include('partials.flash')

		<div id='content'>
			@yield('content')
		</div>
		
		@yield('footer')
	
	</body>
</html>