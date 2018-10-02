<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>DALS Admin Panel: {{ $title }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>

		@yield('styles')

        <style>
        </style>
	</head>
	<body>
        @include('admin.partials.menu')
        <div class="admin-body">
            <div class="admin-header">
                <h1 class="title is-1">{{ $title }}</h1>
            </div>
            <div class="admin-content">
                @yield('content')
            </div>
        </div>
    </body>
</html>
