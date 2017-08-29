<nav class="navbar is-transparent">
	<div class="navbar-brand">
		<div class="navbar-burger" data-target="actionMenu">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<div class="navbar-menu" id="actionMenu">
		<div class="navbar-end">
			<div class="navbar-item">
				<a href="/languages">
					<h5 class="subtitle is-5">Languages</h5>
				</a>
			</div>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">
					<h5 class="subtitle is-5">Search</h5>
				</a>

				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item" href="/nominals/search/paradigm">Nominal paradigm</a>
					<a class="navbar-item" href="/verbs/search/paradigm">Verb paradigm</a>
					<a class="navbar-item" href="/verbs/search/form">Verb form</a>
					<a class="navbar-item" href="/search">Text</a>
				</div>
			</div>
			@can('add content')
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						<h5 class="subtitle is-5">Add</h5>
					</a>

					<div class="navbar-dropdown is-boxed">
						<a class="navbar-item" href="/languages/create">Language</a>
						<a class="navbar-item" href="/groups/create">Group</a>
						<a class="navbar-item" href="/sources/create">Source</a>
						<hr class="navbar-divider">
						<a class="navbar-item" href="/verbs/forms/create">Verb form</a>
						<a class="navbar-item" href="/nominals/forms/create">Nominal form</a>
						<a class="navbar-item" href="/nominals/paradigms/create"><nobr>Nominal paradigm</nobr></a>
						<a class="navbar-item" href="/examples/create">Form example</a>
						<hr class="navbar-divider">
						<a class="navbar-item" href="/morphemes/create">Morpheme</a>
						<a class="navbar-item" href="/changes"><nobr>Initial Change</nobr></a>
						<a class="navbar-item" href="/glosses/create">Gloss</a>
						<a class="navbar-item" href="/slots/create">Slot</a>
						<hr class="navbar-divider">
						<a class="navbar-item" href="/phonemes/create">Phoneme/Cluster</a>
						<a class="navbar-item" href="/reflexes/create">Reflex</a>
						<a class="navbar-item" href="/rules/create">Rule</a>
						<hr class="navbar-divider">
						<a class="navbar-item" href="/variables/create">Variable</a>
						<a class="navbar-item" href="/datapoints/create">Datapoint</a>
					</div>
				</div>
			@endcan
		</div>
	</div>
</nav>
