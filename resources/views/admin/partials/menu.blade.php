<aside class="menu admin-menu">
    <p class="menu-label">General</p>
    <ul class="menu-list">
        <li><a href="/admin" class="@if(Route::is('admin::index')) is-active @endif">Dashboard</a></li>
    </ul>
    <p class="menu-label">Edit data</p>
    <ul class="menu-list">
        @foreach(['user', 'verb', 'feature', 'phoneme'] as $item)
            <li>
                <a href="/admin/{{ $item }}s"
                   class="@if(Route::is("admin::{$item}s")) is-active @endif"
                >{{ ucfirst($item) }} data</a>
            </li>
        @endforeach
    </ul>
    <p class="menu-label"><a href="/">Back</a></p>
</aside>
