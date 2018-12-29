@extends('layout', ['title' => $morpheme->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Morpheme details</h2>
<h1 class="title is-4">
    {!! $morpheme->present('disambiguatedName')->then('language')->as('link', 'morphemes') !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $morpheme, 'namespace' => 'morphemes'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showCognates' => 'Cognates',
                'showForms' => 'Forms',
                'showLog' => 'Credits'
            ],
            'namespace' => 'morphemes',
            'model' => $morpheme
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
