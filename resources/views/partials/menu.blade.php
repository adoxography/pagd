<nav class="nav has-shadow">
	<div class="container">
		<div class="nav-left">
			<a href="/home" class="nav-item is-tab @if(URL::current() == URL::to("/home")) is-active @endif">Home</a>
			<a href="/languages" class="nav-item is-tab @if(URL::current() == URL::to("/languages")) is-active @endif">Languages</a>
			<a href="/glossary" class="nav-item is-tab @if(URL::current() == URL::to("/glossary")) is-active @endif">Glossary</a>
			<a href="/search" class="nav-item is-tab @if(URL::current() == URL::to("/search")) is-active @endif">Search</a>
		</div>
		@if(Auth::user())
			<div class="nav-center">
				<div class="dropdown">
					<a class="control nav-item dropdown-switch is-tab">
						Add
					</a>			
					<div class="dropdown-options">
						<a href="/languages/create">Language</a>
						<a href="/forms/create">Form</a>
						<a href="/examples/create">Example</a>
						<a href="/morphemes/create">Morpheme</a>
						<a href="/sources/create">Source</a>
						<a href="/rules/create">Rule</a>
						<a href="/changes">Initial Change</a>
						<a href="/glosses/create">Gloss</a>
						<a href="/slots/create">Slot</a>
						<a href="/variables/create">Variable</a>
						<a href="/datapoints/create">Datapoint</a>
					</div>
				</div>
			</div>
		@endif
		<div class="nav-right">
			@if(Auth::user())
				<a href="/profile/bookmarks" class="nav-item is-tab @if(URL::current() == URL::to("/users/{{ Auth::user()->id }}/bookmarks")) is-active @endif">Bookmarks</a>
			@endif
			@if(Auth::user())
				<form action="/logout" method="post" style="display:-webkit-inline-box;">
					{{ csrf_field() }}
					<a href="#" class="nav-item is-tab" onclick="event.preventDefault(); this.parentNode.submit()">Log out</a>
				</form>
			@else
				<a href="/login" class="nav-item is-tab @if(URL::current() == URL::to("/login")) is-active @endif">Log in</a>
			@endif
		</div>
	</div>
</nav>