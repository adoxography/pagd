<section class="footer">
	<div class="container">

		<nav class="breadcrumb" style="margin-bottom: 0">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>

				@can('add content')
					<li><a href="/users">Users</a></li>
					<li><a href="/guide">Contributor guide</a></li>
				@endcan

				<li><a href="/resources">Other resources</a></li>
			</ul>
		</nav>

		@can('add content')
			<nav class="breadcrumb">
				<ul>
					<li><a href="/changelog">Changelog</a></li>
					<li><a href="/log">Activity log</a></li>
					<li><a href="/need-attention">Missing data</a></li>
					<li><a href="/missing/page-numbers">Missing page numbers</a></li>
					<li><a href="/tickets">Tickets</a></li>
				</ul>
			</nav>
		@endcan
	</div>
</section>
