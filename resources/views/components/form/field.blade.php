<div class="field">
	<label for="{{ $id or $name }}" class="label">
		@if(isset($label))
			{{ ucwords($label) }}
		@else
			{{ ucwords($name) }}
		@endif
	</label>

	<div class="control">
		@yield("{$name}_control")
	</div>

	<span
		class="help is-danger"
		v-show="errors.has('{{ $name }}')"
		v-text="errors.first('{{ $name }}')"
	></span>
</div>