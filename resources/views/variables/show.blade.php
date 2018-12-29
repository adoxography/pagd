@extends('layout', ['title' => $variable->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Variable details</h2>
<h1 class="title is-4">{!! $variable->present() !!}</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $variable, 'namespace' => 'variables'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details', 
                'showDatapoints' => 'Datapoints',
                'showLanguages' => 'Languages'
            ],
            'namespace' => 'variables',
            'model' => $variable
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
