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
				<a href="/nominals/search/paradigm">Nominal paradigm</a>
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
				<a href="/groups/create">Group</a>
				<a href="/sources/create">Source</a>
				<hr>
				<a href="/verbs/forms/create">Verb form</a>
				<a href="/nominals/forms/create">Nominal form</a>
				<a href="/nominals/paradigms/create"><nobr>Nominal paradigm</nobr></a>
				<a href="/examples/create">Form example</a>
				<hr>
				<a href="/morphemes/create">Morpheme</a>
				<a href="/changes"><nobr>Initial Change</nobr></a>
				<a href="/glosses/create">Gloss</a>
				<a href="/slots/create">Slot</a>
				<hr>
				<a href="/phonemes/create">Phoneme/Cluster</a>
				<a href="/reflexes/create">Reflex</a>
				<a href="/rules/create">Rule</a>
				<hr>
				<a href="/variables/create">Variable</a>
				<a href="/datapoints/create">Datapoint</a>
			</div>
		</div>	
	</li>
	@endif
</ul>