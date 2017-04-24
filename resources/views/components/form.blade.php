<form
	method="{{ isset($method) && $method == 'GET' ? 'GET' : 'POST' }}"

	@if(isset($action))
	action="{{ $action }}"
	@endif

	@if(isset($class))
	class="{{ $class }}"
	@endif
	>
	
	@if(isset($method) && ($method != 'GET' && $method != 'POST'))
		{{ method_field($method) }}
	@endif
	{{ csrf_field() }}
	{{ $slot }}
</form>