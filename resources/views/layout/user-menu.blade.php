<ul class="horizontal-list">
	@if(Auth::user())
		<li>
			<a href="/profile/bookmarks">
				<h5 class="subtitle is-5"><nobr>Bookmarks</nobr></h5>
			</a>
		</li>
		<li>
			<a href="/profile">
				<h5 class="subtitle is-5"><nobr>Profile</nobr></h5>
			</a>
		</li>
		<li>
			<form action="/logout" method="post" style="display:-webkit-inline-box;">
				{{ csrf_field() }}
				<a href="#" onclick="event.preventDefault(); this.parentNode.submit()">
					<h5 class="subtitle is-5"><nobr>Log out</nobr></h5>
				</a>
			</form>
		</li>
	@else
		<li>
			<a href="/register"><h5 class="subtitle is-5"><nobr>Register</nobr></h5></a></span>
		</li>
		<li>
			<a href="/login"><h5 class="subtitle is-5"><nobr>Log in</nobr></h5></a>
		</li>
	@endif
</ul>