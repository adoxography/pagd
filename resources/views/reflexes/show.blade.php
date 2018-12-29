@extends('layout', ['title' => $reflex->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Reflex details</h2>
<h1 class="title is-4">
    {!! $reflex->parent->present()->as('link', 'reflexes')->before('language', 'link') !!}
    >
    {!! $reflex->reflex->present()->as('link', 'reflexes')->before('language', 'link') !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $reflex, 'namespace' => 'reflexes'])
@endsection

@section('content')
<div class="columns">
    <div class="column">
        <div class="field">
            <span class="label">Environment</span>
            {{ $reflex->environment or 'Elsewhere case' }}
        </div>
    </div>
    <div class="column">

        @if($reflex->publicNotes)
        <div class="field">
            <span class="label">Public notes</span>
            {!! replaceTags($reflex->publicNotes, $reflex->reflex->language_id) !!}
        </div>
        @endif

        @if ($reflex->privateNotes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
        <div class="field">
            <span class="label">Private notes</span>
            {!! replaceTags($reflex->privateNotes, $reflex->reflex->language_id) !!}
        </div>
        @endif
    </div>
</div>

<div class="field">
    <span class="label">Sources</span>
    @include('components.model.sourcelist', ['sources' => $reflex->sources])
</div>
@endsection
