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
		<script src = "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
		{{-- {{ Html::style(elixir('css/style.css')) }} --}}
		
		@yield('header')
	</head>
	<body>
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Algling.net
					</h1>
					<h2 class="subtitle">
						Or another name...
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

		<script>

			Vue.component("model-card", {
				template: `
					<div class="card">
						<header class="card-header">
							<p class="card-header-title is-4" style="font-size: 20px;">
								<slot name="header"></slot>
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								<div class="columns is-multiline">
									<slot></slot>
								</div>
								<div class="level">
									<div class="level-right">
										<slot name="tags"></slot>
									</div>
								</div>
							</div>
						</div>
						<footer class="card-footer">
							<slot name="footer"></slot>
						</footer>
					</div>
				`
			});

			Vue.component("field-card", {
				props: ['width'],
				template: `
					<div class="column" :class="width">
					<div class="card" style="box-shadow:none;">
						<div class="card-header">
							<slot name="label"></slot>
						</div>
						<div class="card-content">
							<slot></slot>
						</div>
					</div>
				`
			});

			new Vue({
				el: '#root'
			});
		</script>
{{-- 		<script>
			$(document).ready(function(){
				$('#nav').menu();
			});
		</script> --}}
	
	</body>
</html>