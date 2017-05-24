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
							<li><h5 class="subtitle is-5"><a href="#"><nobr>Nominal forms</nobr></a></h5></li>
							<li><h5 class="subtitle is-5"><a href="#">Phonology</a></h5></li>
							<li><h5 class="subtitle is-5"><a href="/sources">Bibliography</a></h5></li>
						</ul>
					</div>
				</div>
				<div class="tile is-vertical is-parent">
					<div class="tile is-child" id="user-menu">
						<ul class="horizontal-list">
							@if(Auth::user())
								<li>
									<a href="/profile/bookmarks">
										<h5 class="subtitle is-5">Bookmarks</h5>
									</a>
								</li>
								<li>
									<a href="/profile">
										<h5 class="subtitle is-5">Profile</h5>
									</a>
								</li>
								<li>
									<form action="/logout" method="post" style="display:-webkit-inline-box;">
										{{ csrf_field() }}
										<a href="#" onclick="event.preventDefault(); this.parentNode.submit()">
											<h5 class="subtitle is-5">Log out</h5>
										</a>
									</form>
								</li>
							@else
								<li>
									<a href="/register"><h5 class="subtitle is-5">Register</h5></a></span>
								</li>
								<li>
									<a href="/login"><h5 class="subtitle is-5">Log in</h5></a>
								</li>
							@endif
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
										<a href="/verbs/search/paradigm">Verb paradigm</a>
										<a href="/verbs/search/form">Verb form</a>
										<a href="/search">Text</a>
									</div>
								</div>
							</li>
							<li>
								<a href="/glossary">
									<h5 class="subtitle is-5">Browse</h5>
								</a>
							</li>
							@if(Auth::user() && Auth::user()->permissions->canEdit)
							<li id="addbutton">
								<div class="dropdown">
									<a class="dropdown-button">
										<h5 class="subtitle is-5">Add</h5>
									</a>
									<div class="dropdown-options">
										<a href="/languages/create">Language</a>
										<a href="/verbs/forms/create">Verb Form</a>
										<a href="/nominals/forms/create">Nominal Form</a>
										<a href="/examples/create">Example</a>
										<a href="/morphemes/create">Morpheme</a>
										<a href="/sources/create">Source</a>
										<a href="/rules/create">Rule</a>
										<a href="/changes"><nobr>Initial Change</nobr></a>
										<a href="/glosses/create">Gloss</a>
										<a href="/slots/create">Slot</a>
										<a href="/variables/create">Variable</a>
										<a href="/datapoints/create">Datapoint</a>
										<a href="/nominals/paradigms/create"><nobr>Nominal paradigm</nobr></a>
									</div>
								</div>	
							</li>
							@endif
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>