<div id='header'>
	<ul>
		<li><a href = '/'>Home</a></li>
		<li><a href = '/languages'>Languages</a></li>
		<li><a href = '/glossary'>Glossary</a></li>
		<li><a href = '/search'>Search</a></li>
		@if(Auth::user())
			<li><a href = '#'>Logged in as {{ Auth::user()->email }}</a></li>
		@endif
	</ul>
</div>