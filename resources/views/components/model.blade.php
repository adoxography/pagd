<div class="card">

	<header class="card-header">
		<p class="card-header-title is-4" style="font-size: 20px;">
			{{ $header }}
		</p>
	</header>

	<alg-tabs>
		{{ $slot }}
	</alg-tabs>

	@if(Auth::user())
		@component('components.form', ['class' => 'card-footer', 'method' => 'DELETE', 'url' => $uri])
			<a class="card-footer-item" href = "{{ $uri }}/edit">Edit</a>
			<a class="card-footer-item" onclick="event.preventDefault(); this.parentNode.submit()">Delete</a>
		@endcomponent
	@endif
</div>