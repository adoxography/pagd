<form method="{{ isset($method) && $method == 'GET' ? 'GET' : 'POST' }}" {{ isset($url) ? "action = $url" : ""}} class="{{ $class or '' }}">
	@if(isset($method) && ($method != 'GET' && $method != 'POST'))
		{{ method_field($method) }}
	@endif
	{{ csrf_field() }}
	{{ $slot }}
</form>