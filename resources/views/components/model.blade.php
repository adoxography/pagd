<div class="card">

	@if(isset($header))
		<header class="card-header">
			<p class="card-header-title is-4" style="font-size: 20px;">
				@if(isset($smallCaps))
				<span class="gloss">
				@endif
				{{ $header }}
				@if(isset($smallCaps))
				</span>
				@endif
			</p>
		</header>
	@endif

	<alg-tabs>
		{{ $slot }}
	</alg-tabs>

	@if(Auth::user())
		@component('components.form', ['class' => 'card-footer', 'method' => 'DELETE', 'url' => $uri])
			<a class="card-footer-item" href = "{{ $uri }}/edit">Edit</a>
			<a class="card-footer-item" onclick="event.preventDefault(); var confirm = window.confirm('Are you sure?'); if(confirm) { this.parentNode.submit(); }">Delete</a>
		@endcomponent
	@endif
</div>