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
			@if(Auth::user())
			    <a href="{{ $uri }}/edit" class="card-header-icon">
			      	<span class="icon">
			        	<i class="fa fa-pencil"></i>
			      	</span>
			    </a>
		    @endif
		</header>
	@endif

	<alg-tabs>
		{{ $slot }}

		@if(isset($history) && Auth::user())
			<model-tab name="Log">
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Creation'])
					<?php $created = $history->where('key', 'created_at')->first(); ?>
					@if($created)
						Created by {{ $created->userResponsible() ? $created->userResponsible()->name : 'Anonymous' }} at {{ $created->newValue() }}
					@else
						No data
					@endif
				@endcomponent
				<?php $last = $history->last(); ?>
				@if($last && $last->key != 'created_at')
					@component('components.model.field', ['width' => 'is-12', 'label' => 'Last Edit'])
							{{ $last->userResponsible() ? $last->userResponsible()->name : 'Anonymous' }} changed the {{ $last->fieldName() }} field from "{{ $last->oldValue() }}" to "{{ $last->newValue() }}" at {{ $last->updated_at }}
					@endcomponent
				@endif
			</model-tab>
		@endif
	</alg-tabs>

	@if(Auth::user())
		@component('components.form', ['class' => 'card-footer', 'method' => 'DELETE', 'url' => $uri])
			<a class="card-footer-item" href = "{{ $uri }}/edit">Edit</a>
			<a class="card-footer-item" onclick="event.preventDefault(); var confirm = window.confirm('Are you sure?'); if(confirm) { this.parentNode.submit(); }">Delete</a>
		@endcomponent
	@endif
</div>