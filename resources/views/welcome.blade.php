@extends('layout')

@section('title')
    <h1 class="title is-4">Database of Algonquian Language Structures</h1>
@endsection

@section('content')
    <article>
        <p>This database provides information about the sounds and grammar of the <a href="/groups/1">Algonquian Languages</a>, focusing on the following areas:</p>
        <blockquote>
            <p><a href="/variables" class="is-uppercase">Structural survey</a>: maps showing the patterning of various features across the Algonquian family</p>
            <p><a href="/verb%20forms" class="is-uppercase">Verb forms</a> and <a href="/nominal%20forms" class="is-uppercase">Nominal forms</a> annotated with glosses, allomorphy, examples, cognates, and historical derivation</p>
            <p><a href="/phonology" class="is-uppercase">Phonology</a>: phoneme inventories, clusters, synchronic and diachronic rules, and sound changes</p>
            <p><a href="/sources" class="is-uppercase">Bibliography</a>: a filterable bibliography of Algonquian linguistics</p>
        </blockquote>

        <article class="notification has-background-primary">
            <div class="media">
                <div class="media-left">
                    <span class="icon is-large">
                        <i class="fas fa-info-circle fa-3x"></i>
                    </span>
                </div>
                <div class="media-content">
            Please note that the database is currently in development. You're welcome to look around, but be aware that the data is incomplete and uncorrected. You can <a href="/about">read more about the project here</a>.
        </article>
    </article>

    <p style="margin-bottom: .5em;">To start using the database, click any of the links above, or try doing a <a>verb paradigm search</a>, or click a language on the map below.</p>
    <alg-map :markers="{{ App\Models\Language::with('location')->get() }}"></alg-map>
@stop
