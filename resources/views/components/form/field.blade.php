@if(!isset($standalone) || !$standalone)
<div class="field">
		<label for="{{ $id or $name }}" class="label">
			@if(isset($label))
				{{ ucfirst($label) }}
			@else
				{{ ucfirst($name) }}
			@endif
		</label>

	<div class="control">
@endif

		@yield("{$name}_control")

@if(!isset($standalone) || !$standalone)
	</div>
	<span
		class="help is-danger"
		v-show="errors.has('{{ $name }}')"
		v-text="errors.first('{{ $name }}')"
	></span>
</div>
@endif