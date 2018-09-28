<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>DALS Admin Panel{{ $title ? ": $title" : '' }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>

		@yield('styles')

        <style>
            .has-background-primary {
                background-color: #FFFF00;
            }

            .menu-sublabel {
                padding: 0 .75em;
                cursor: default;
                font-style: italic;
                font-weight: bold;
            }

            .menu-list a {
                padding-top: 0;
                padding-bottom: .25em;
            }

            .menu-list a:hover {
                box-shadow: none;
                -webkit-box-shadow: none;
            }

            .menu-list li ul {
                margin-top: 0;
                margin-bottom: .5em;
            }
        </style>
	</head>
	<body>
        <div class="columns">
            <div class="column is-2" style="margin: .5em;">
                @include('admin.partials.menu')
            </div>
            <div class="column container admin-content">
                <h1 class="title is-1 has-background-primary">{{ $title }}</h1>
                @yield('content')
            </div>
        </div>
    </body>
</html>
