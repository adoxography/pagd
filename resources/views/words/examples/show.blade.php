@extends('layout', ['title' => $example->name])

@section('title')
<h2 class="subtitle is-5 is-uppercase has-text-grey-darker has-text-weight-bold">Example details</h2>
<h1 class="title is-4">
    {!! $example->present() !!}
</h1>
@endsection

@section('icons')
@include('partials.show.icons', ['model' => $example, 'namespace' => 'examples'])
@endsection

@section('content')
<div class="columns">
    <div class="column is-narrow">
        @include('partials.show.nav', [
            'routes' => [
                'showBasic' => 'Basic details',
                'showCognates' => 'Cognates',
                'showLog' => 'Credits'
            ],
            'namespace' => 'examples',
            'model' => $example
        ])
    </div>
    <div class="column">
        @yield('details')
    </div>
</div>
@endsection
