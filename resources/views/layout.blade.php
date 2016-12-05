<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Pan-Algonquian Grammar Database</title>
		
		<link rel = "stylesheet" type = "text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css"/>
		<script src = "https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
		<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
		{{ Html::style(elixir('css/style.css')) }}
		
		@yield('header')
	</head>
	<body>
		@include('partials.flash')

		<div id='menu'>
			@include('partials.menu')
		</div>

		<div id='content'>
			@yield('content')
		</div>
		
		@yield('footer')

		<script>
			$(document).ready(function(){
				$('#nav').menu();
			});
		</script>
	
	</body>
</html>