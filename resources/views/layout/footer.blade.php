<section class="footer has-background-secondary">
    <div class="footer-item has-text-white">
        <p class="has-text-primary is-uppercase">Database of Algonquian Language Structures</p>
        <ul class="is-horizontal-tablet">
            <li><a href="/" class="has-text-white">Home</a></li>
            <li><a href="/about" class="has-text-white">About</a></li>
            @can('add content')
                <li><a href="/users" class="has-text-white">Users</a></li>
                <li><a href="/guide" class="has-text-white">Contributor guide</a></li>
            @endcan
            <li><a href="/resources" class="has-text-white">Other resources</a></li>
        </ul>
        @can('add content')
            <ul class="is-horizontal-tablet">
                <li><a href="/changelog" class="has-text-white">Changelog</a></li>
                <li><a href="/log" class="has-text-white">Activity log</a></li>
                <li><a href="/needs-attention" class="has-text-white">Missing data</a></li>
                <li><a href="/missing/page-numbers" class="has-text-white">Missing page numbers</a></li>
                <li><a href="/tickets" class="has-text-white">Tickets</a></li>
            </ul>
        @endcan
    </div>

    <ul class="footer-item is-uppercase">
        @auth
            <li><a href="/profile/bookmarks" class="has-text-primary">Bookmarks</a></li>
            <li><a href="/profile" class="has-text-primary">Profile</a></li>

            @hasanyrole('developer|leader')
                <li><a href="/admin" class="has-text-primary">Admin&nbsp;panel</a></li>
            @endhasanyrole

            <li>
                @component('components.form.inline', [
                    'class' => 'has-text-primary',
                    'action' => '/logout'
                ])
                    Log out
                @endcomponent
            </li>
        @else
            <li><a href="/login" class="has-text-primary">Log in</a></li>
            <li><a href="/register" class="has-text-primary">Register</a></li>
        @endauth
    </ul>
</section>
