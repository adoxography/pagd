<p class="control">
	<label class="radio">
		<input
			type="radio"
			value="{{ $value }}"
			name="{{ $name }}"
			@if(isset($checked) && $checked === true)
			checked="checked"
			@endif

			@click="errors.remove('{{ $name }}')"
		/>
		{{ $label }}
	</label>
</p>