<nav class="navbar has-background-secondary is-uppercase"
     role="navigation"
     aria-label="main navigation">

    {{-- Top left logo --}}
    <div class="navbar-brand">
        {{-- Mobile logo --}}
        <span class="navbar-link is-arrowless has-background-primary has-text-grey-dark is-hidden-tablet">
            <a href="/" class="logo has-text-grey-dark">alglang.net</a>
            <portal-target name="mobile-navbar-button"></portal-target>
        </span>

        {{-- Desktop logo & dropdown --}}
        <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile">
            <a href="/" class="navbar-link is-arrowless has-background-primary has-text-grey-dark">
                <span class="logo">alglang.net</span>
                <span class="icon"><i class="fas fa-bars"></i></span>
            </a>

            <div class="navbar-dropdown">
                <a href="/variables" class="navbar-item">Structural survey</a>
                <a href="/verb%20forms" class="navbar-item">Verb forms</a>
                <a href="/nominal%20forms" class="navbar-item">Nominal forms</a>
                <a href="/phonology" class="navbar-item">Phonology</a>
                <a href="/sources" class="navbar-item">Bibliography</a>
            </div>
        </div>
    </div>

    <div class="navbar-menu">
        <div class="navbar-end">
            {{-- Smart search --}}
            <div class="navbar-item">
                <div class="field is-grouped smart-search">
                    <label class="is-hidden-visual" for="smart-search">
                        Smart search
                    </label>
                    <v-popover trigger="hover" offset="8">
                        <form method="GET" action="/search/smart/results">
                            <p class="control has-icons-right">
                                <input class="input has-background-grey-darker"
                                       type="text"
                                       id="smart-search"
                                       name="lookup"
                                       placeholder="Smart search..." />
                                <span class="icon is-small is-right has-text-grey-dark">
                                    <i class="fas fa-search"></i>
                                </span>
                            </p>
                        </form>
                        <template slot="popover">
                            Suggestions:
                            <ul>
                                <li>"Proto-Algonquian"</li>
                                <li>"Plains Cree TA Conjunct"</li>
                                <li>"AI preterit forms in Fox"</li>
                                <li>"TI independent 3pl"</li>
                            </ul>
                        </template>
                    </v-popover>
                </div>
            </div>

            {{-- Language menu - hidden on mobile --}}
            <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile">
                <a class="navbar-link is-arrowless">Languages</a>

                <div class="navbar-dropdown is-right">
                    @foreach (App\Models\Language::take(10)->get() as $language)
                    <a class="navbar-item" href="/languages/{{ $language->id }}">
                        {{ $language->name }}
                    </a>
                    @endforeach
                    <a href="/languages" class="navbar-item">More...</a>
                </div>
            </div>

            {{-- Search menu - hidden on mobile --}}
            <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile">
                <a class="navbar-link is-arrowless">Search</a>

                <div class="navbar-dropdown is-right">
					<a class="navbar-item" href="/nominals/search/paradigm">Nominal paradigm</a>
					<a class="navbar-item" href="/verbs/search/paradigm">Verb paradigm</a>
					<a class="navbar-item" href="/verbs/search/form">Verb form</a>
					<a class="navbar-item" href="/phonemes/search">Phonology</a>
					<a class="navbar-item" href="/search/text">Text</a>
                </div>
            </div>

            {{-- Guests just see a login button --}}
            @guest
            <a href="/login" class="navbar-item has-background-primary has-text-grey-dark is-hidden-mobile">Log in</a>
            @endguest

            {{-- Add menu for those with permission --}}
            @can('add content')
            <div class="navbar-item has-dropdown is-hoverable is-hidden-mobile">
                <a class="navbar-link is-arrowless has-background-primary has-text-grey-dark">Add</a>

                <div class="navbar-dropdown is-right">
                    <a class="navbar-item" href="/languages/create">Language</a>
                    <a class="navbar-item" href="/groups/create">Group</a>
                    <a class="navbar-item" href="/sources/create">Source</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" href="/verbs/forms/create">Verb form</a>
                    <a class="navbar-item" href="/nominals/forms/create">Nominal form</a>
                    <a class="navbar-item" href="/nominals/paradigms/create">Nominal paradigm</a>
                    <a class="navbar-item" href="/examples/create">Form example</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" href="/morphemes/create">Morpheme</a>
                    <a class="navbar-item" href="/changes">Initial Change</a>
                    <a class="navbar-item" href="/glosses/create">Gloss</a>
                    <a class="navbar-item" href="/slots/create">Slot</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" href="/phonemes/create">Phoneme/Cluster</a>
                    <a class="navbar-item" href="/reflexes/create">Reflex</a>
                    <a class="navbar-item" href="/rules/create">Rule</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" href="/variables/create">Variable</a>
                    <a class="navbar-item" href="/datapoints/create">Datapoint</a>
                </div>
            @endcan
        </div>
    </div>
</nav>

{{-- Mobile navigation menu --}}
<b-collapse :open="mobileNavbarOpen" v-cloak>
    <div slot="trigger">
        <portal to="mobile-navbar-button">
            <a class="icon has-text-grey-dark" @click="mobileNavbarOpen = !mobileNavbarOpen"><i class="fas fa-bars"></i></a>
        </portal>
    </div>

    <div class="mobile-navbar-dropdown has-background-grey-dark is-uppercase">
        <a href="/languages" class="navbar-item">Languages</a>
        <a href="/search" class="navbar-item">Search</a>
        @can('add content')
        <a href="/create" class="navbar-item has-background-primary has-text-grey-dark">Add</a>
        @endcan
        <hr class="navbar-divider" />
        <a href="/variables" class="navbar-item">Structural survey</a>
        <a href="/verb%20forms" class="navbar-item">Verb forms</a>
        <a href="/nominal%20forms" class="navbar-item">Nominal forms</a>
        <a href="/phonology" class="navbar-item">Phonology</a>
        <a href="/sources" class="navbar-item">Bibliography</a>
    </div>
</b-collapse>
