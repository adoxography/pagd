<form style="display: initial" method="{{ $method ?? 'POST' }}" action="{{ $action }}">
    {{ csrf_field() }}
    <a href="{{ $action }}"
       onclick="event.preventDefault(); {{ isset($confirm) && $confirm ? "if (confirm('Are you sure?'))" : '' }} this.parentNode.submit();"
       class="{{ $class ?? '' }}">
        {{ $slot }}
    </a>
</form>
