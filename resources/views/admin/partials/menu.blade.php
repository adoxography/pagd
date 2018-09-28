<aside class="menu admin-menu">
    <p class="menu-label">General</p>
    <ul class="menu-list">
        <li><a href="/admin" class="@if(Route::is('admin::index')) is-active @endif">Dashboard</a></li>
    </ul>
    <p class="menu-label">Add</p>
    <ul class="menu-list">
        <li>
            <p class="menu-sublabel">Users</p>
            <ul>
                <li><a href="/admin/users" class="@if(Route::is('admin::users')) is-active @endif">Add code</a></li>
            </ul>
        </li>
        <li>
            <p class="menu-sublabel">Verbs</p>
            <ul>
                <li><a>Class</a></li>
                <li><a>Mode</a></li>
                <li><a>Order</a></li>
                <li><a>Argument</a></li>
            </ul>
        </li>
        <li>
            <p class="menu-sublabel">Nominals</p>
            <ul>
                <li><a>Feature</a></li>
            </ul>
        </li>
        <li>
            <p class="menu-sublabel">Morphemes</p>
            <ul>
                <li><a>Slot</a></li>
            </ul>
        </li>
        <li>
            <p class="menu-sublabel">Phonemes</p>
            <ul>
                <li><a>Height</a></li>
                <li><a>Backness</a></li>
                <li><a>Length</a></li>
                <li><a>Place</a></li>
                <li><a>Manner</a></li>
                <li><a>Voicing</a></li>
            </ul>
        </li>
        <li>
            <p class="menu-sublabel">Rules</p>
            <ul>
                <li><a>Type</a></li>
            </ul>
        </li>
    </ul>
    <p class="menu-label"><a href="/">Back</a></p>
</aside>
