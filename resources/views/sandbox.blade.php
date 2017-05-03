@php

$language = App\Language::first();

@endphp

<!doctype html>
<html style="background-color: white;">
	<head>
		<meta charset="UTF-8" />
		<title>{{ $title or "Database of Algonquian Language Structures" }}</title>

		<link rel="stylesheet" type="text/css" href="{{ mix("/css/app.css") }}" />
		<script>
		    window.Laravel = { csrfToken: '{{ csrf_token() }}' };
		</script>
		
		@yield('header')
	</head>
	<body class="sandbox">
		<section class="hero">
			<div class="hero-body">
				<div class="container">
					<div class="tile is-ancestor">
						<div class="tile is-parent is-3" id="logo">
							<a href="/">
								<div class="tile is-child">
									<h4 class="title is-4">Database of Algonquian Language Structures</h4>
								</div>
							</a>
						</div>
						<div class="tile is-parent is-3">
							<div class="tile is-child" id="main-menu">
								<ul>
									<li><h5 class="subtitle is-5"><a href="#">Structural survey</a></h5></li>
									<li><h5 class="subtitle is-5"><a href="#">Verb forms</a></h5></li>
									<li><h5 class="subtitle is-5"><a href="#">Nominal forms</a></h5></li>
									<li><h5 class="subtitle is-5"><a href="#">Phonology</a></h5></li>
									<li><h5 class="subtitle is-5"><a href="/sources">Bibliography</a></h5></li>
								</ul>
							</div>
						</div>
						<div class="tile is-vertical is-parent">
							<div class="tile is-child" id="user-menu">
								<ul class="horizontal-list">
									<li>
										<a href="/bookmarks">
											<h5 class="subtitle is-5">Bookmarks</h5>
										</a>
									</li>
									<li>
										<a href="#">
											<h5 class="subtitle is-5">Profile</h5>
										</a>
									</li>
									<li>
										<a href="#">
											<h5 class="subtitle is-5">Log out</h5>
										</a>
									</li>
								</ul>
							</div>
							<div class="tile is-child" id="action-menu">
								<ul class="horizontal-list">
									<li>
										<a href="/languages">
											<h5 class="subtitle is-5">Languages</h5>
										</a>
									</li>
									<li>
										<div class="dropdown">
											<a class="dropdown-button">
												<h5 class="subtitle is-5">Search</h5>
											</a>
											<div class="dropdown-options">
												<a href="#">Noun paradigm</a>
												<a href="#">Verb paradigm</a>
												<a href="#">Verb form</a>
												<a href="#">Text</a>
											</div>
										</div>
									</li>
									<li>
										<a href="#">
											<h5 class="subtitle is-5">Browse</h5>
										</a>
									</li>
									<li id="addbutton">
										<div class="dropdown">
											<a class="dropdown-button">
												<h5 class="subtitle is-5">Add</h5>
											</a>
											<div class="dropdown-options">
												<a href="/languages/create">Language</a>
												<a href="/forms/create">Form</a>
												<a href="/examples/create">Example</a>
												<a href="/morphemes/create">Morpheme</a>
												<a href="/sources/create">Source</a>
												<a href="/rules/create">Rule</a>
												<a href="/changes"><nobr>Initial Change</nobr></a>
												<a href="/glosses/create">Gloss</a>
												<a href="/slots/create">Slot</a>
												<a href="/variables/create">Variable</a>
												<a href="/datapoints/create">Datapoint</a>
											</div>
										</div>	
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section" id="main-content">
			<div class="container" id="root">
				<div class="card">
					<header class="card-header">
						<p class="card-header-title">
							<label>Language details:</label>
							{{ $language->name }}
						</p>
					</header>
					<div class="columns is-gapless">
						<div class="column is-narrow">
							<nav class="panel">
								<a href="#" class="panel-block is-active">Basic details</a>
								<a href="#" class="panel-block">Children</a>
								<a href="#" class="panel-block">Structural survey</a>
								<a href="#" class="panel-block">Forms</a>
								<a href="#" class="panel-block">Morphemes</a>
								<a href="#" class="panel-block">Paradigms</a>
								<a href="#" class="panel-block">Phonemes</a>
								<a href="#" class="panel-block">Clusters</a>
								<a href="#" class="panel-block">Rules</a>
								<a href="#" class="panel-block">Sources</a>
								<a href="#" class="panel-block">Log</a>
							</nav>
						</div>
						<div class="column">
							<div class="card-content">
								<div class="content">
									<span class="is-one-line">
										<label class="label">Also known as:</label>
										[Nickname]
									</span>
									<span class="is-one-line">
										<label class="label">Parent:</label>
										[None]
									</span>
									<span class="is-one-line">
										<label class="label">Group:</label>
										<a href="{{ $language->group_id }}">{{ $language->group->name }}</a>
									</span>
									<span class="is-one-line">
										<label class="label">Algonquianist code:</label>
										{{ $language->algoCode }}
									</span>
									<span class="is-one-line">
										<label class="label">ISO:</label>
										{{ $language->iso or 'none' }}
									</span>
									<br />
									<label class="label">Description</label>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="footer">
			<div class="container">
				<p><a href="/about">About</a> • <a href="#">Users</a> • <a href="/guide">Contributor guide</a> • <a href="#">Other resources</a></p>
				<p><a href="/changelog">Changelog</a> • <a href="/log">Activity log</a> • <a href="need-attention">Missing data</a></p>
			</div>
		</section>

		<script src="{{ mix("/js/app.js") }}"></script>
	</body>
</html>