@extends('layout', ['title' => $language->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Language details</h2>
<h1 class="title is-4">
    {!! $language->present() !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $language, 'namespace' => 'languages'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showSurvey' => 'Datapoints',
                'showParadigms' => 'Paradigms',
                'showVerbs' => 'Verbs',
                'showNominals' => 'Nominals',
                'showPhonemes' => 'Phonemes',
                'showClusters' => 'Clusters',
                'showRules' => 'Rules',
                'showSources' => 'Sources',
                'showLog' => 'Credits'
            ],
            'namespace' => 'languages',
            'model' => $language
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
