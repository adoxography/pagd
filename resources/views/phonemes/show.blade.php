@extends('layout', ['title' => $phoneme->name])

@php
$namespace = $phoneme->type == 'Cluster' ? 'clusters' : 'phonemes';
@endphp

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">
    @if($phoneme->isArchiphoneme)
        Archiphoneme
    @elseif($phoneme->type == 'Cluster')
        Cluster
    @else
        Phoneme
    @endif
    details
</h2>
<h1 class="title is-4">
    {!! $phoneme->present()->with('language')->as('link', $namespace) !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $phoneme, 'namespace' => $namespace])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showReflexes' => 'Reflexes',
                'showExamples' => 'Examples',
                'showLog' => 'Credits'
            ],
            'namespace' => $namespace,
            'model' => $phoneme
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
