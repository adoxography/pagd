<footer class="footer">
	<div class="container">
		<div class="content has-text-centered">
			<p><a href="/contact">Contact</a></p>
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