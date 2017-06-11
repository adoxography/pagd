<section class="footer">
	<div class="container">
		<p><a href="/about">About</a> @if(Auth::user())• <a href="/users">Users</a> • <a href="/guide">Contributor guide</a>@endif • <a href="#">Other resources</a></p>
		@if(Auth::user())
		<p><a href="/changelog">Changelog</a> • <a href="/log">Activity log</a> • <a href="need-attention">Missing data</a> • <a href="mailto:gstill@uw.edu?Subject=DALS%20Error%20Report" style="color: red;">Submit an error report</a></p>
		@endif
	</div>
</section>