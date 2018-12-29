@extends('layout')

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Source details</h2>
<h1 class="title is-4">
    {!! $source->display !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $source, 'namespace' => 'sources'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showForms' => 'Forms',
                'showMorphemes' => 'Morphemes'
            ],
            'namespace' => 'sources',
            'model' => $source
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
