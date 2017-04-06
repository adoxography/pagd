<footer class="footer">
	<div class="container">
		<div class="content has-text-centered">
			<ul class="horizontal-list has-bullets">
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/changelog">Changelog</a>
				</li>
				@if(Auth::user() && Auth::user()->permissions->canEdit)
				<li>
					<a href="/log">Activity log</a>
				</li>
				<li>
					<a href="/need-attention">Missing data</a>
				</li>
				<li>
					<a href="/guide">Guide for contributors</a>
				</li>
				@endif
			</ul>
			@if(Auth::user())
				@component('components.form', ['url' => '/backup'])
					<button type="submit" class="button is-info is-small">Download a Backup</button>
				@endcomponent
			@else
				<a href="/register">Sign up</a>
			@endif
		</div>
	</div>
</footer>