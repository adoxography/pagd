@if(!isset($standalone) || !$standalone)
<div class="field">
		<label for="{{ $id ?? $name }}" class="label">
			@if(isset($label))
				{{ ucfirst($label) }}
			@else
				{{ ucfirst($name) }}
			@endif
		</label>

	@isset($typewriter)
		<alg-typewriter>
	@endisset
	<div class="control">
@endif

		@yield("{$name}_control")

@if(!isset($standalone) || !$standalone)
	</div>
	@isset($typewriter)
		</alg-typewriter>
	@endisset
	<span
		class="help is-danger"
		v-show="errors.has('{{ $name }}')"
		v-text="errors.first('{{ $name }}')"
	></span>
</div>
@endif
