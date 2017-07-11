<form
	method="{{ isset($method) && $method == 'GET' ? 'GET' : 'POST' }}"

	@if(isset($action))
	action="{{ $action }}"
	@endif

	@if(isset($class))
	class="{{ $class }}"
	@endif

	@submit="validateBeforeSubmit($event)"
>

	@if(isset($method) && ($method != 'GET' && $method != 'POST'))
		{{ method_field($method) }}
	@endif
	{{ csrf_field() }}
	{{ $slot }}

	@if(isset($visible) && $visible)
	<div class="field">
		<button type="submit" class="button is-primary" :disabled="errors.any()">Submit</button>
	</div>
	@endif
</form>