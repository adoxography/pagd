<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>{{ $title ?? "DALS Admin Panel" }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>

		@yield('styles')

        <style>
            .admin-menu {
                {{--background-color: red;--}}
            }

            .admin-content {
                {{--background-color: blue;--}}
            }

            .has-background-primary {
                background-color: #FFFF00;
            }
        </style>
	</head>
	<body>
        <section class="section">
            <aside class="menu admin-menu is-pulled-left">
                <p class="menu-label">General</p>
                <ul class="menu-list">
                    <li><a class="is-active">Dashboard</a></li>
                </ul>
                <p class="menu-label">Add</p>
                <ul class="menu-list">
                    <li>
                        <a>Users</a>
                        <ul>
                            <li><a>Add code</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Verbs</a>
                        <ul>
                            <li><a>Class</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <div class="container admin-content">
                <h1 class="title is-1 has-background-primary">Dashboard</h1>
                <h2 class="title is-2">Statistics</h2>
                <p># of registerd users: ___</p>
                <p># of verb forms: ___</p>
                <p># of nominal forms: ___</p>
                <p># of morphemes: ___</p>
                <p># of phonemes: ___</p>
                <p># of sources: ___</p>
                <p># of sources in use: ___</p>
            </div>
        </section>
    </body>
</html>
