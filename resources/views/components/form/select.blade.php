@extends('components.form.field')

@section("{$name}_control")
	<div class="control">
		<span class="select">
			<select
				name="{{ $name }}"
				id="{{ $id or $name }}"

				@if(isset($disabled))
				:disabled="{{ $disabled }}"
				@endif

				@if(isset($model))
				v-model="{{ $model }}"
				@endif

				@if (isset($rules))
					v-validate="'{{ $rules }}'"
				@endif

				@if (isset($label))
					data-vv-as="{{ $label }}"
				@endif
			>

				@if($options instanceof Illuminate\Database\Eloquent\Collection)
					@foreach($options as $option)
						<option
							value="{{ $option['id'] }}"
							@if(old($name, 'not found') !== 'not found')
								@if(old($name) === $option['id'])
									selected="selected"
								@endif
							@elseif(isset($selected))
								@if($selected === $option['id'])
									selected="selected"
								@endif
							@endif
						>
							{{ $option['name'] }}
						</option>
					@endforeach
				@else
					@foreach($options as $display => $value)
						<option
							value="{{ $value }}"
							@if(old($name, 'not found') !== 'not found')
								@if(old($name) === $value)
									selected="selected"
								@endif
							@elseif(isset($selected))
								@if($selected === $value)
									selected="selected"
								@endif
							@endif
						>
							{{ $display }}
						</option>
					@endforeach
				@endif
			</select>
		</span>
	</div>
@endsection