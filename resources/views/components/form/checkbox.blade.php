@php
	$value = isset($value) ? $value : true;
@endphp

<div class="field">
	<p class="control">
		<label class="checkbox">
			<input
				type="checkbox"
				name="{{ $name }}"
				id="{{ $id or $name }}"
				value="{{ $value }}"

				@if((old($name, 'not found') !== 'not found' && old($name) == $value) || (isset($checked) && $checked))
				checked="checked"
				@endif

				@if(isset($disabled))
				:disabled="{{ $disabled }}"
				@endif

				@if(isset($label))
				data-vv-as="{{ $label }}"
				@endif

				@if (isset($model))
					v-model="{{ $model }}"
				@endif
			/>
			@if(isset($label))
				{{ ucfirst($label) }}
			@else
				{{ ucfirst($name) }}
			@endif
		</label>
	</p>

	<span
		class="help is-danger"
		v-show="errors.has('{{ $name }}')"
		v-text="errors.first('{{ $name }}')"
	></span>
</div>