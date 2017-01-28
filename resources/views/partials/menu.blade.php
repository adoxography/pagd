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
				<div class="dropdown" style="display: flex; justify-content: center">
					<a class="control nav-item dropdown-switch is-tab" style="margin-bottom: 0;">
						Add
					</a>			
					<ul class="box dropdown-options">
						<li><a href="/languages/create">Language</a></li>
						<li><a href="/forms/create">Form</a></li>
						<li><a href="/examples/create">Example</a></li>
						<li><a href="/morphemes/create">Morpheme</a></li>
					</ul>
				</div>
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