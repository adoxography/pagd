<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
        <meta name="theme-color" content="#fee414" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>{{ $title ?? "Database of Algonquian Language Structures" }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>

		@yield('styles')
        <link rel="manifest" href="/manifest.json" />
	</head>
	<body>
		<div id="body-wrapper" class="has-background-grey">
            <div class="top-content">
                @include('layout.header')

                <section class="section has-background-grey" id="main-content">
                    <div class="content-container has-background-white">
                        <header class="main-content-header is-flex">
                            <div>
                                @yield('title')
                            </div>
                            @yield('icons')
                        </header>

                        <main>
                            @yield('content')
                        </main>
                    </div>
                </section>
            </div>
            @include('layout.footer')
        </div>

		<script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>
        {{--<script>--}}
            {{--if ('serviceWorker' in navigator) {--}}
                {{--navigator.serviceWorker.register('service-worker.js')--}}
                    {{--.catch(err => console.error(err));--}}
            {{--}--}}
        {{--</script>--}}
		@yield('scripts')
	</body>
</html>
