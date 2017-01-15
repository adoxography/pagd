<nav class="nav has-shadow">
	<div class="container">
		<div class="nav-left">
			<a href="/home" class="nav-item is-tab @if(URL::current() == URL::to("/home")) is-active @endif">Home</a>
			<a href="/languages" class="nav-item is-tab @if(URL::current() == URL::to("/languages")) is-active @endif">Languages</a>
			<a href="#" class="nav-item is-tab @if(URL::current() == URL::to("/glossary")) is-active @endif">Glossary</a>
			<a href="/search" class="nav-item is-tab @if(URL::current() == URL::to("/search")) is-active @endif">Search</a>
		</div>
		@if(Auth::user())
			<div class="nav-center">
				<a class="nav-item is-tab">Add</a>
			</div>
		@endif
		<div class="nav-right">
			<a href="/contact" class="nav-item is-tab @if(URL::current() == URL::to("/contact")) is-active @endif">Contact</a>
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

{{-- <ul id='nav'>
	<li>
		<div><a href = '/'>Home</a></div>
	</li>
	<li>
		<div><a href = '/languages'>Languages</a></div>
		<ul>
			@foreach($languageHeadings as $heading)
				<li><div><a href = '/languages/{{ $heading->id }}'>{{ $heading->name }}</a></div></li>
			@endforeach
		</ul>
	</li>
	<li>
		<div>Glossary</div>
		<ul>
			<li>
				<div><a href = '/groups'>Groups</a></div>
			</li>
			<li>
				<div><a href = '/classes'>Classes</a></div>
			</li>
			<li>
				<div><a href = '/glosses'>Glosses</a></div>
			</li>
			<li>
				<div><a href = '/modes'>Modes</a></div>
			</li>
			<li>
				<div><a href = '/orders'>Orders</a></div>
			</li>
			<li>
				<div><a href = '/slots'>Slots</a></div>
			</li>
		</ul>
	</li>
	<li>
		<div><a href = '/search'>Search</a></div>
	</li>
	<li>
		<div>Add</div>
		<ul>
			<li>
				<div><a href = '/languages/create'>Language</a></div>
			</li>
			<li>
				<div><a href = '/forms/create'>Form</a></div>
			</li>
			<li>
				<div><a href = '/examples/create'>Example</a></div>
			</li>
			<li>
				<div><a href = '/morphemes/create'>Morpheme</a></div>
			</li>
		</ul>
	</li>
	<li>
		<div><a href = '/contact'>Contact</a></div>
	</li>
	@if(Auth::user())
		<li><div>Logged in as {{ Auth::user()->email }}</div></li>
	@endif
</ul> --}}