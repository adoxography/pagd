<ul id='nav'>
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
				<div><a href = '/glossary/groups'>Groups</a></div>
			</li>
			<li>
				<div><a href = '/glossary/classes'>Classes</a></div>
			</li>
			<li>
				<div><a href = '/glossary/glosses'>Glosses</a></div>
			</li>
			<li>
				<div><a href = '/glossary/modes'>Modes</a></div>
			</li>
			<li>
				<div><a href = '/glossary/orders'>Orders</a></div>
			</li>
			<li>
				<div><a href = '/glossary/tenses'>Tenses</a></div>
			</li>
			<li>
				<div><a href = '/glossary/slots'>Slots</a></div>
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
	@if(Auth::user())
		<li><div>Logged in as {{ Auth::user()->email }}</div></li>
	@endif
</ul>